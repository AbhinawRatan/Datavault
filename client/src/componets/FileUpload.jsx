import { useState } from "react";
import axios from "axios";
import "./FileUpload.scss";
import { TbUpload } from "react-icons/tb";

const FileUpload = ({ contract, account, provider }) => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("No image selected");

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    file.isUploading = true;
    setFiles([...files, file]);

    const formData = new FormData();
    formData.append(file.name, file, file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length > 0) {
      try {
        const formData = new FormData();
        formData.append("file", files[0]);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `72a8234d4d502b4ec466`,
            pinata_secret_api_key: `472a8d5619c31c5fe7e2d4319d191063dd51bdba725c377d7e446695d87eaa8c`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFiles([]);
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFiles([e.target.files[0]]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <div className="file-card">
          <div className="file-inputs">
            <input type="file" onChange={retrieveFile} />
            <button className="font-poppins">
              <i>
                <TbUpload />
              </i>
              Browse File
            </button>
          </div>
          <span className="textArea">{fileName}</span>
        </div>
        <button type="submit" className="upload" disabled={files.length === 0}>
          Upload File
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
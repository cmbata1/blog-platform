import { SecretClient } from "@azure/keyvault-secrets";

const BlobService = {
    getBlobList(){
        const { DefaultAzureCredential } = require("@azure/identity");
        const { BlobServiceClient } = require("@azure/storage-blob");
        const { SecretClient } = require("@azure/keyvault-secrets");
        const account = "<account name>";
        const sas = "<service Shared Access Signature Token>";
        const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

        const containerName = "";
        async function main() {
        const containerClient = blobServiceClient.getContainerClient(containerName);

        let blobs = containerClient.listBlobsFlat();
        var blobContent = new Array();
        for await (const blob of blobs) {
            const blobClient = containerClient.getBlobClient(blob);
            const downloadBlockBlobResponse = await blobClient.download();
            const downloaded = await blobToString(await downloadBlockBlobResponse.blobBody);

            blobContent.push(downloaded)
        }
        return {blobs, blobContent}
        }
        async function blobToString(blob) {
            const fileReader = new FileReader();
            return new Promise((resolve, reject) => {
              fileReader.onloadend = (ev) => {
                resolve(ev.target.result);
              };
              fileReader.onerror = reject;
              fileReader.readAsText(blob);
            });
          }

        let {blobs, blobContent} = main(); 
        return blobs, blobContent;

    }
};

export default BlobService;
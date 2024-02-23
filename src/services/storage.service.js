const BlobService = {
    getBlobList(){
        const { BlobServiceClient } = require("@azure/storage-blob");
        const account = ${{ env.ACCOUNT_NAME }};
        const sas = process.env.SAS;
        const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net${sas}`);

        const containerName = process.env.CONTAINER_NAME;
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
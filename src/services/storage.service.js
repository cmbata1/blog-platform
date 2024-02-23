const BlobService = {
    getBlobList(){
        const { BlobServiceClient } = require("@azure/storage-blob");
        const connStr = "DefaultEndpointsProtocol=https;AccountName=mychroniclesstorage;AccountKey=6+lkHiXicbYbUXzIORxNU0a46AThcPlNxvmBNRDORSI9H2occy01KDND6C/3gbz7oKueeyTG/G+X+AStZepM6w==;EndpointSuffix=core.windows.net";
        const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
        const containerName = "blogs";

        async function main() {
        const containerClient = blobServiceClient.getContainerClient(containerName);

        let blobs = containerClient.listBlobsFlat();
        var blobContent = new Array();
        for await (const blob of blobs) {
            const blobClient = containerClient.getBlobClient(blob);
            const downloadBlockBlobResponse = await blobClient.download();
            const downloaded = (
              await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)
            ).toString();

            blobContent.push(downloaded)
        }
        return {blobs, blobContent}
        }
        async function streamToBuffer(readableStream) {
            return new Promise((resolve, reject) => {
              const chunks = [];
              readableStream.on("data", (data) => {
                chunks.push(data instanceof Buffer ? data : Buffer.from(data));
              });
              readableStream.on("end", () => {
                resolve(Buffer.concat(chunks));
              });
              readableStream.on("error", reject);
            });
          }

        let {blobs, blobContent} = main(); 
        return blobs, blobContent;

    }
};

export default BlobService;
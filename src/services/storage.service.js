import Vue from 'vue'

export default {
    getBlobList(){
        const { BlobServiceClient } = require("@azure/storage-blob");
        const connStr = "DefaultEndpointsProtocol=https;AccountName=mychroniclesstorage;AccountKey=6+lkHiXicbYbUXzIORxNU0a46AThcPlNxvmBNRDORSI9H2occy01KDND6C/3gbz7oKueeyTG/G+X+AStZepM6w==;EndpointSuffix=core.windows.net";
        const blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
        const containerName = "blogs";

        async function main() {
        const containerClient = blobServiceClient.getContainerClient(containerName);

        let i = 1;
        let blobs = containerClient.listBlobsFlat();
        var blobContent = new Array();
        for await (const blob of blobs) {
            const downloadBlockBlobResponse = await blobClient.download();
            const downloaded = (
              await streamToBuffer(downloadBlockBlobResponse.readableStreamBody)
            ).toString();

            blobContent.push(downloaded)
        }
        }

        main(); 
        return {blobs, blobContent}
    }
}
const BlogService = {
    getBlogList(){
        const fs = require('fs');
        const path = require('path');
        
        const directoryPath = '../assets/blogs';
        const blogNames = new Array();
        const blogContent = new Array();
        
        fs.readdir(directoryPath, (err, files) => {
          if (err) {
            console.error('Error reading directory:', err);
            return;
          }
        
          files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            
            fs.readFile(filePath, 'utf8', (err, content) => {
              if (err) {
                console.error('Error reading file:', err);
                return;
              }
        
              blogNames.push(file);
              blogContent.push(content);
            });
          });
          return {blogNames, blogContent};
        });
        

    }
};

export default BlogService;
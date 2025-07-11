const fs = require("fs");
const path = require("path");

function printFolderTree(dirPath, indent = "") {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const item of items) {
    if (item.isDirectory()) {
      console.log(indent + "📁 " + item.name);
      const newPath = path.join(dirPath, item.name);
      printFolderTree(newPath, indent + "   ");
    }
  }
}

const rootFolder = path.join(__dirname, "src");

console.log("📂 Folder Tree of 'src':\n");
printFolderTree(rootFolder);

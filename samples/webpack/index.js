var cloudinary = require('cloudinary-core');
var tag = cloudinary.ImageTag.new("sample", {cloud_name: "demo", width: 300});
tag.toHtml();
document.body.appendChild(tag.toDOM());
document.body.appendChild(
    tag.transformation()
        .angle(15)
        .width(500)
        .height(500)
        .crop("scale")
        .effect("grayscale")
        .getParent().toDOM()
);

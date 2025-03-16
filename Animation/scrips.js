const image = document.getElementById('image');
image.addEventListener('mouseover', function() {
    image.src = 'image2.jpg';
});

image.addEventListener('mouseout', function() {
    image.src = 'image1.jpg';
});
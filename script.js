const videoPlayer = document.querySelector('iframe');
const pipButton = document.getElementById('pipButton');

pipButton.addEventListener('click', async () => {
    if (document.pictureInPictureEnabled) {
        try {
            await videoPlayer.requestPictureInPicture();
        } catch (error) {
            console.error('Error entering Picture-in-Picture mode: ', error);
        }
    } else {
        alert("Picture-in-Picture is not supported in your browser.");
    }
});

const video = document.getElementById('video')

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('/project/face-detection/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/project/face-detection/models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('/project/face-detection/models'),
    faceapi.nets.faceExpressionNet.loadFromUri('/project/face-detection/models')
  ]).then(startVideo)

function startVideo() {
    navigator.getUserMedia(
        { video: {} },
        stream => video.srcObject = stream,
        err => console.error(err)
    )
}

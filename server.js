<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <script src="https://js.stripe.com/v3/"></script>
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>
    <link rel="icon" type="image/x-icon" href="assets/icon.svg" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"/>
  </head>

  <body>
    <div class="navbar">
      <a class="nav-content" href="https://kubesimplify.com/" target="_blank">
        <img src="assets/logo.svg" alt="" height="60" width="350" />
      </a>
    </div>

    <div class="container">
      <div class="header">
        <div class="title">
          <h1>Welcome to Sunil-Kubesimplify Workshops! </h1>
        </div>
        <p>
          Kubesimplify is on a mission to simplify the cloud-native for everyone. <br><br> 
          Various initiatives such as Blogs, Twitter Threads, Twitter Spaces etc. have been started by us, all to <b>demystify</b> complex cloud-native concepts and make them simple for anyone to understand. <br><br>
          We welcome you to yet another initiative on that path - <b>"Live Workshops"</b>
          <br><br>
          <center>
            <iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/oiBdx7et21w" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </center>
        </p>
      </div>

      <!-- Workshop Cards -->
      <div class="wrapper-flex">
        <div class="speaker-container">
          <img src="assets/price-tag.png" id="price-tag" />
          <div id="price">FREE</div>
          <div class="banner-img"></div>
          <img
            src="assets/Speaker_Imgs/ChadMCrowell.jpeg"
            alt="profile image"
            class="profile-img"
          />
          <h1 class="name">Linux & Docker Fundamentals</h1>
          <div class="description">
            <div class="timings">
              <p><i class="bi bi-calendar-fill"></i>July 11th, 2022</p>
              <p><i class="bi bi-clock-fill"></i>07:00 AM PT</p>
            </div>
            This workshop aims to build a solid Linux and Docker foundation. You will learn about Linux fundamentals, containers and Docker. <br><br>
          </div>
          <button class="btn" id="work-1">Register Now</button>
        </div>
        <div class="speaker-container">
          <img src="assets/price-tag.png" id="price-tag" />
          <div id="price">FREE</div>
          <div class="banner-img"></div>
          <img
            src="assets/Speaker_Imgs/Saiyam Pathak.jpg"
            alt="profile image"
            class="profile-img"
          />
          <h1 class="name">Kubernetes 101</h1>
          <div class="description">
            <div class="timings">
              <p><i class="bi bi-calendar-fill"></i>July 18th, 2022</p>
              <p><i class="bi bi-clock-fill"></i>07:00 AM PT</p>
            </div>
            This workshop helps you learn Kubernetes from scratch. Some of the topics include K8s fundamentals, Pods, Deployments, Services, Ingress & more.
          </div>
          <button class="btn" id="work-2">Register Now</button>
        </div>
        <div class="speaker-container">
          <img src="assets/price-tag.png" id="price-tag" />
          <div id="price">FREE</div>
          <div class="banner-img"></div>
          <img
            src="assets/Speaker_Imgs/dan-garfield.jpeg"
            alt="profile image"
            class="profile-img"
          />
          <h1 class="name">GitOps With ArgoCD</h1>
          <div class="description">
            <div class="timings">
              <p><i class="bi bi-calendar-fill"></i>July 25th, 2022</p>
              <p><i class="bi bi-clock-fill"></i>07:00 AM PT</p>
            </div>
            In this workshop you will learn the theory of GitOps and also apply all of those practices in your own application using the Argo project family.
          </div>
          <button class="btn" id="work-3">Register Now</button>
        </div>

    <!-- Client-side Js -->
    <script src="app.js"></script>
  </body>
</html>

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>online sevice</title>
        <link rel="stylesheet" href="clone.css">
        <link rel="stylesheet" media="screen and (max-width: 700px)" href="phone1.css">
        <style>
        * {
        margin: 0px;
        padding: 0px;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    header {
        position: relative;
        display: flex;
        flex-direction: column;
        background: url('bg3.jpg') no-repeat center center/cover;
    }
    
    #navbar {
        display: flex;
        position: fixed;
        width: 100%;
        top: 0px;
        align-items: center;
        z-index: 15;
    }
    
    #navbar div {
        display: flex;
        align-items: center;
        height: 60px;
    }
    
    #imga-1 {
        margin: 20px 40px;
    }
    
    #navbar::before {
        content: "";
        position: absolute;
        background-color: black;
        top: 0px;
        left: 0px;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 0.7;
    }
    
    
    #imga-1 img {
        height: 59px;
    }
    
    #navbar div ul {
        display: flex;
        align-items: center;
        margin: 20px;
    }
    
    #navbar div li {
        margin: 0px 10px;
        list-style: none;
        /* align-items: center; */
    }
    
    #navbar div a {
        text-decoration: none;
        padding: 10px 20px;
        color: white;
        font-size: large;
        /* background-color: aliceblue; */
    }
    
    #navbar div a:hover {
        background-color: aliceblue;
        border-radius: 20px;
        color: black;
    }
    
    /* home */
    #home {
        display: flex;
        justify-content: center;
    }
    
    #home-box {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 60%;
        color: white;
    }
    
    #home-box h2 {
        font-size: 50px;
        margin-top: 160px;
        margin-bottom: 30px;
        text-align: center;
        color: white;
    }
    
    #home-box p {
        font-size: 25px;
        text-align: center;
    }
    
    .button {
        font-size: 30px;
        padding: 0px 20px;
        border-radius: 10px;
        margin-top: 20px;
        margin-bottom: 109px;
        cursor: pointer;
        background-color: red;
        border: 2px solid white;
        color: white;
    }
    
    /* service */
    
    #service {
        display: flex;
        flex-direction: column;
        /* border: 2px solid red; */
    }
    
    #service-box1 {
        display: flex;
        justify-content: center;
        margin: 20px;
    }
    
    #service-box1 h1 {
        font-size: 4rem;
    }
    
    #service-box2 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .centre {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .service-sub-box {
        max-width: 300px;
        min-width: 200px;
        /* height: 500px; */
        border: 2px solid brown;
        background-color: rgb(234, 231, 231);
        border-radius: 30px;
        margin: 20px 55px 60px 55px;
        padding: 20px;
    }
    
    .service-sub-box img {
        height: 160px;
        margin: 10px;
    }
    
    .service-sub-box h1 {
        font-size: 2rem;
        margin: 10px;
    }
    
    .service-sub-box p {
        font-size: 1.1rem;
        text-align: center;
    }
    
    /* client */
    
    #client-box1 h1 {
        font-size: 4rem;
        margin: 20px;
    }
    
    #client-box-2 {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    #client-box-2 img {
        margin: 30px 40px;
        /* border: 2px solid red; */
        height: 160px;
        width: 160px;
    }
    
    #client {
        /* while adding background in before your parent should have position relative */
        position: relative;
    }
    
    #client::before {
        content: "";
        background: url('bg2.jpg') no-repeat center center/cover;
        /* border: 2px solid red; */
        position: absolute;
        /* this is impotant */
        width: 100%;
        height: 100%;
        /* */
        opacity: 0.5;
        z-index: -1;
    }
    
    /* contact */
    
    #contact-box label {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    #contact {
        position: relative;
    }
    
    #contact::before {
        content: "";
        position: absolute;
        background: url('bg3.jpg') no-repeat top center/cover;
        height: 100%;
        width: 100%;
        z-index: -1;
        opacity: 0.6;
    }
    
    #contact-box h1 {
        font-size: 4rem;
        margin: 20px;
    }
    
    .yourinfo {
        /* width: 600px; */
        margin: 10px;
    }
    
    .yourinfo input {
        width: 600px;
        height: 40px;
        box-shadow: -1px -1px black;
        border-radius: 8px;
        font-size: large;
        padding-left: 6px;
        /* margin: 10px; */
    }
    
    .yourinfo textarea {
        width: 600px;
        height: 400px;
        font-size: large;
        padding: 6px;
        /* columns: 60; */
        box-shadow: -1px -1px black;
        border-radius: 8px;
        /* margin: 10px; */
    }
    
    /* footer */
    
    footer div {
        background-color: black;
        color: white;
        height: 30px;
    }
        </style>
    </head>
    
    <body>
        <form action="backend.php">
            <header>
                <nav id="navbar">
                    <div id="imga-1">
                        <img src="logo 1.jpg" alt="loading error....">
                    </div>
                    <div class="info">
                        <ul>
                            <li id="info-1" class="item"><a href="#home">Home</a></li>
                            <li id="info-2" class="item"><a href="#service">Service</a></li>
                            <li id="info-3" class="item"><a href="#client">Client</a></li>
                            <li id="info-4" class="item"><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
                <section id="home">
                    <div id="home-box">
                        <h2>Welcome to MyOnlineMeal</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at labore obcaecati similique rerum
                            ab
                            non,
                            modi eaque expedita, laboriosam porro ea fugit ipsa dignissimos autem fugiat vitae? Laboriosam
                            quas
                            facilis, consectetur </p>
                        <button class="button">Order Now</button>
                    </div>
                </section>
            </header>
            <section id="service">
                <div id="service-box1">
                    <h1>Our Service</h1>
                </div>
                <div id="service-box2">
                    <div class="centre service-sub-box">
                        <img src="logo2.png" alt="">
                        <h1>Food Catering</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus praesentium architecto omnis
                            cupiditate libero consequatur soluta optio temporibus voluptatem nisi repellat sunt modi harum
                            ipsa,
                            perspiciatis velit molestiae, non iure rerum unde vitae perferendis impedit enim magni? Commodi,
                            numquam libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda vero
                            delectus ea voluptatibus ipsa at aut minus? Eligendi architecto ipsum dicta accusantium sit
                            earum
                            velit assumenda! Recusandae, facere error.</p>
                    </div>
                    <div class="centre service-sub-box">
                        <img src="logo3.png" alt="">
                        <h1>Bulk Ordering</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel, ipsam exercitationem,
                            pariatur
                            atque culpa a dolores perferendis aspernatur perspiciatis explicabo amet maiores nihil, nam hic
                            rerum quo sequi qui animi asperiores excepturi. Iusto, ab. Iusto aspernatur libero temporibus
                            placeat! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nesciunt officia modi
                            nihil
                            corrupti eaque, cupiditate aperiam, magni aliquid nobis maxime dolores adipisci, ducimus
                            perferendis
                            dolorem. Quasi eos deleniti qui.</p>
                    </div>
                    <div class="centre service-sub-box">
                        <img src="logo4.jpg" alt="">
                        <h1>Food Ordering</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at, temporibus, natus
                            dignissimos
                            quidem minus consequatur commodi eum numquam assumenda, a libero tenetur error. Enim, maxime
                            minus
                            molestias modi, pariatur eligendi ullam neque ex, atque obcaecati eos natus exercitationem
                            perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corporis
                            explicabo
                            autem voluptate repellendus, ad, maiores accusantium adipisci minus expedita provident ullam
                            neque
                            harum earum aliquam officiis quas, enim cum!</p>
                    </div>
                </div>
            </section>
            <section id="client" class="centre">
                <div id="client-box1">
                    <h1>Our client</h1>
                </div>
                <div id="client-box-2">
                    <img src="logo 1.jpg" alt=""><img src="logo2.png" alt=""><img src="logo3.png" alt=""><img
                        src="logo4.jpg" alt="">
                </div>
            </section>
            <section id="contact">
                <div id="contact-box" class="centre">
                    <div>
                        <h1>Contact Us</h1>
                    </div>
                    <div class="yourinfo">
                        <label for="name">Name</label>
                        <input type="name" name="myname" id="name" placeholder="Enter your Name">
                    </div>
                    <div class="yourinfo">
                        <label for="email">Email</label>
                        <input type="email" name="myemail" id="email" placeholder="Enter your Email">
                    </div>
                    <div class="yourinfo">
                        <label for="phone">Phone Number</label>
                        <input type="phone" name="myphone" id="phone" placeholder="Enter your phone Number">
                    </div>
                    <div class="yourinfo">
                        <label for="message">Comment</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <div class="yourinfo">
                        <input type="submit" value="submit">
                    </div>
                </div>
                <footer>
                    <div class="centre">
                        Copyright &copy; www.myOnlineMeal.com. All rights reserved!
                    </div>
                </footer>
            </section>
        </form>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
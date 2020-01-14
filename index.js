




/*
<script>
			// navigation starts here ---------------
		
		$("#toggle").click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
		$("#resize ul li a").click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
		$('.close-btn').click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
			// navigation ends here -----------------
		</script>
		<!-------------AOS Library-------->
		<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
		<script>
		AOS.init({
			delay: 150
		});
		</script>
		<!----------typing animation--->
		<script>
		var typed = new Typed('#typed', {
		strings: ['web developer.',
		'web designer.',
		'search engine optimizer.',
		'editor.',
		'photographer.',
		],
		typeSpeed: 80,
		backSpeed: 40,
		smartBackspace: true, // this is a default
		loop: true
		});
		</script>
		<script>
			gsap.fromTo(".header img", {opacity: 0, scale:0.2}, {opacity: 0.9, scale:1, duration: 1, ease: "bounce"});
		</script>

		*/
/*
<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
		<!-------google fonts------->
		<link href='https://fonts.googleapis.com/css?family=Roboto Mono' rel='stylesheet'>
		<!--------css link--------->
		<link rel="stylesheet" type="text/css" href="index.css">
		<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
		
	</head>
	<body>
		<div class="wrapper">
			<!--------------navbar starts here--------->
			<nav>
				<span id="brand">
					<a href="index.html">Rajat Sharma</a>
				</span>
				<ul id="menu">
					<li><a href="index.html" data-aos="fade-up" data-aos-delay="50">home<span>.</span></a></li>
					<li><a href="about.html" data-aos="fade-up" data-aos-delay="150">about<span>.</span></a></li>
					<li><a href="contact.html" data-aos="fade-up" data-aos-delay="200">contact<span>.</span></a></li>
				</ul>
				<div id="toggle">
					<div class="span">menu</div>
				</div>
			</nav>
			<div id="resize">
				<div class="close-btn">close</div>
				<ul id="menu">
					<li><a href="index.html">home<span>.</span></a></li>
					<li><a href="about.html">about<span>.</span></a></li>
					<li><a href="contact.html">contact<span>.</span></a></li>
				</ul>
			</div>
			
			<!------------navbar ends here------>
			<div class="whitespace"></div>
			<!--------about section starts here------>
			
			<!-----contact section starts here--->
			<div class="container">
				<div class="contact">
					<div class="row">
						<div class="col-lg-8">
							<h3 data-aos="fade-up" data-aos-delay="300">say hello 👋.</h3>
							<br>
							<p data-aos="fade-up" data-aos-delay="400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						</div>
					</div>
				</div>
			</div>
			<br><br>
			<!------contact description---->
			<div class="container">
					<div class="row">
						<div class="col-lg-8">
							<form class="contact-form" id="contact-form" method="post">
								<div class="form-group" data-aos="fade-up" data-aos-delay="500">
									<label for="name">Name:</label>
									<input type="name" class="form-control" id="name">
								</div>

								<div class="form-group" data-aos="fade-up" data-aos-delay="600">
									<label for="email">Email:</label>
									<input type="email" class="form-control" id="email">
								</div>
								
								
								<div class="form-group" data-aos="fade-up" data-aos-delay="200">
									<label for="email">Message:</label>
									<textarea class="form-control" id="email" rows="3"></textarea>
								</div>
                                <br>
								<button type="submit" class="send" data-aos="fade-up" data-aos-delay="300">send message</button>
							</form>
						</div>
					</div>
			</div>
			<!--------contact description ends here------>
			<!-----footer starts here----->
			<div class="footer">
				<div class="container">
					<br><br>
					<div class="collab">
						<div class="row">
							<div class="col-lg-12">
								<p data-aos="fade-up" data-aos-delay="400">Got an interesting project, I can help you.</p>
							</div>
						</div>
					</div>
					<br>
					<div class="hr">
						<div class="row"></div>
					</div>
					<br><br>
					<div class="info">
						<div class="row">
							<div class="col-lg-4" id="personal">
								<p>connect with me</p>
								<h4>ig @rajat</h4>
								<br><br>
							</div>
							<div class="col-lg-4" id="media">
								<p>follow me</p>
								<ul>
									<li id="fb">fb</li>
									<li id="ig">ig</li>
									<li id="gm">gm</li>
									<li id="wa">Wapp</li>
								</ul>
								<br><br>
							</div>
							<div class="col-lg-4" id="address">
								<p>say hello</p>
								<h4>sharmarajat2chd@gmail.com</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script>
			// navigation starts here ---------------
		
		$("#toggle").click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
		$("#resize ul li a").click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
		$('.close-btn').click(function() {
		$(this).toggleClass('on');
		$("#resize").toggleClass('active');
		})
			// navigation ends here -----------------
		</script>
		<!-------------AOS Library-------->
		<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
		<script>
		AOS.init({
			delay: 150
		});
		</script>
	</body>
</html>
*/
	<div class="header">
		<!-- Navbar -->
		<nav class="navbar navbar-expand-lg   navbar-opaque navbar-inverse bg-dark ">
		<div class="container navbar-container">
				<!-- Brand/Logo -->
				 

		<div class="collapse navbar-collapse align-items-center justify-content-end" id="navbar_main">
		<!-- Navbar links -->
			<ul class="navbar-nav">
				<li class="nav-item dropdown megamenu">
					<a class="nav-link" href="index.html">DAROM-CLUB #68438</a>
				</li>
				
			</ul>
			
			<ul class="navbar-nav ml-lg-auto">
				<li class="nav-item">
					<div class="pl-4 d-none d-lg-inline-block">
						<a href="javascript:void(0)" data-fancybox="" data-src="#dokonk" class="btn btn-styled btn-success btn-circle" target="_blank">
							Провести конкурс
						</a>
					</div>
				</li>
			</ul>
		</div>
		</div>
		</nav>


	</div>
	<div style="display:none;" id="dokonk">
		<center>Пожалуйста, подождите...</center>
	</div>

    <!-- Slider -->
    <section class="swiper-js-container background-image-holder" data-holder-type="fullscreen" data-holder-offset="">
    <div class="swiper-container" data-swiper-autoplay="true" data-swiper-effect="fade" data-swiper-items="1" data-swiper-space-between="0" style="z-index:0;">
        <div class="swiper-wrapper">
            <!-- Slide -->
            <div class="swiper-slide" data-swiper-autoplay="8000">
                <div class="slice holder-item holder-item-light has-bg-cover bg-size-cover" style="background-image: url('https://qiwi.me/img/back-party.svg'); background-position: center;">
                    <span class="mask bg-dark alpha-7"></span>
                    <div class="container d-flex align-items-center">
                        <div class="col">
                            <div class="row justify-content-center text-center">
							
                                <div class="col-lg-8" id="ddd">       
									<div class="profile-picture profile-picture--style-2 animated mb-2" data-animation-in="fadeInDownBig" data-animation-delay="200"  style="width: 180px;"> 
										<img  style="width: auto;" src="<? echo $gd["member"]["ava"] ?>">
									</div>

									<div class="block-body text-center animated" data-animation-in="fadeInDownBig" data-animation-delay="200">
										<h3 class="heading heading-3 strong-600 mb-0 mb-0"><? echo $gd["member"]["f_name"] . " " . $gd["member"]["l_name"];?></h3>
										<h3 class="heading heading-4  strong-300">1 место</h3>
										<h3 class="heading heading-4  strong-300 mt-2">Приз: <? echo $gd["priz"] ?></h3>
										
										<a style="text-transform: none;" target="_blank" href="http://vk.com/wall<? echo $gd["member"]["postID"]?>" class="btn btn-styled  btn-green">Ссылка на пост</a>
									</div>
                                       
									<style>
									@media (min-width: 992px) {
										#ddd {
											margin-top:4em;
										}
									}
									
									#updown {
										-webkit-animation: action 1s infinite  alternate;
										animation: action 1s infinite  alternate;
									}
									@-webkit-keyframes action {
										0% { transform: translateY(0); }
										100% { transform: translateY(-10px); }
									}
									@keyframes action {
										0% { transform: translateY(0); }
										100% { transform: translateY(-10px); }
									}
									</style>   
									
									<p id="updown" class="text-lg line-height-1_6 mt-5 mb-0 animated" data-animation-in="fadeInUpBig" data-animation-delay="200" style="font-size:22px!important; color:#fff; font-family: 'Cuprum', sans-serif;">
                                        Для получения приза спуститесь ниже и пройдите все 3 этапа
                                    </p>
									
									<p id="updown" style="font-size: 45px;" class="mt-3 animated" data-animation-in="fadeInUpBig" data-animation-delay="200"><i class="fa fa-chevron-circle-down" aria-hidden="true"></i></p>
									<!--
                                    <a  href="javascript:void(0)" data-fancybox data-src="#fancybox_hidden_content" class="btn btn-styled btn-base-1 btn-circle mt-5 animated" style="text-transform: none;" data-animation-in="fadeInUpBig" data-animation-delay="200">
                                        Полный список победителей
                                    </a>-->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
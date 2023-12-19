<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary">
            <?php esc_html_e('Skip to content', 'foce'); ?>
        </a>

        <header id="masthead" class="site-header">
            <nav id="site-navigation" class="main-navigation">

                <ul class="first-menu">
                    <li><a href="#story">Histoire</a></li>
                    <li><a href="#characters">Personnages</a></li>
                    <li class="site-title"><a href="<?php echo esc_url(home_url('/')); ?>" rel="home"><?php bloginfo('name'); ?></a></li>
                    <li><a href="#place">Lieu</a></li>
                    <li><a href="#studio">Studio Koukaki</a></li>
                </ul>

                <div class="bouton-burger">
                    <div class="bars">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </div>
                <div class="opened-menu">
                    <div class="images-menu">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/hibiscus_footer.png' ?>"
                            alt="Hibiscus" class="fleur hibiscus">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/random_flower.png' ?>"
                            alt="Fleur mauve" class="fleur mauve">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/orchid.png' ?>"
                            alt="Fleur violette" class="fleur violette">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/Sunflower.png' ?>"
                            alt="Tournesol" class="fleur tournesol">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/flower.png' ?>"
                            alt="Fleur orange" class="fleur jaune">
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-orange.png'; ?>"
                            alt="Chat orange" class="chat orange">
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-noir.png'; ?>"
                            alt="Chat noir" class="chat noir">
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/chat-bleu.png'; ?>"
                            alt="Chat bleu" class="chat bleu">
                    </div>
                    <div class="menu-img">
                        <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/logo2.png'; ?>"
                            alt="logo Fleurs d'oranger & chats errants">
                    </div>
                    <div>
                        <ul class="liste-burger">
                            <li><a href="#story">Histoire</a></li>
                            <li><a href="#characters">Personnages</a></li>
                            <li><a href="#place">Lieu</a></li>
                            <li><a href="#studio">Studio Koukaki</a></li>
                        </ul>
                    </div>

                    <div class="footer-link">
                        <ul class="burger-menu-footer-link">
                            <li><a href="#colophon">STUDIO KOUKAKI</a></li>
                        </ul>
                    </div>
                </div>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->
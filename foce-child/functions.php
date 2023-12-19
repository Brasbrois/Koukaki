<?php
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css', array(), '1.0');
    wp_enqueue_style('swiper-style', get_stylesheet_directory_uri() . '/assets/css/swiper.css');
}

function css_enfant()
{
    wp_enqueue_style('enfant-style', get_stylesheet_directory_uri() . '/assets/css/style.css');
    wp_enqueue_style('animation-style',get_stylesheet_directory_uri() . '/assets/css/animation.css');
    wp_enqueue_style('burger-style',get_stylesheet_directory_uri() . '/assets/css/burger.css');
}
add_action('wp_enqueue_scripts', 'css_enfant');


function theme_scripts()
{
    wp_enqueue_script(
        'swiper',
        'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js',
        array('jquery'), '1.0', true);

}
add_action('wp_enqueue_scripts', 'theme_scripts');



// Get customizer options form parent theme
if (get_stylesheet() !== get_template()) {
    add_filter('pre_update_option_theme_mods_' . get_stylesheet(), function ($value, $old_value) {
        update_option('theme_mods_' . get_template(), $value);
        return $old_value; // prevent update to child theme mods
    }, 10, 2);
    add_filter('pre_option_theme_mods_' . get_stylesheet(), function ($default) {
        return get_option('theme_mods_' . get_template(), $default);
    });
}

function vanilla_script()
{

    wp_enqueue_script('vanillajs', get_stylesheet_directory_uri() . '/assets/js/vanilla.js', array('jquery'), '1.0', true);
    wp_enqueue_script('burgerjs', get_stylesheet_directory_uri() . '/assets/js/burger.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'vanilla_script');
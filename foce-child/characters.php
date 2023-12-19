<?php
$args = array(
    'post_type' => 'characters',
    'posts_per_page' => -1,
    'meta_key' => '_main_char_field',
    'orderby' => 'meta_value_num'
);
$characters_query = new WP_Query($args);
?>

<section id="characters" class="swiper mySwiper">
    <h3 id="titrePersonnages"><span class="anim-text">Les</span> <span class="anim-text">personnages</span></h3>
    <div class="swiper-wrapper">
        <?php
        $i = 1;
        while ($characters_query->have_posts()) {
            $characters_query->the_post();
            echo
                '<div class="swiper-slide slide-', $i, '">',
                '<figure>', get_the_post_thumbnail(get_the_ID(), 'full'),
                '<figcaption>', the_title(), '</figcaption>
                        </figure>
                    </div>';
            $i++;
        }
        ?>
    </div>
</section>
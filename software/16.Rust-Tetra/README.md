# Workshop 16 - Introduction to Tetra with Rust

✔ Discovering the Tetra framework.

✔ Creation of your video game.

✔ Improve your Rust skills.

### Step 0 - SETUP

All the required information to install dependencies can be found in [SETUP.md](./SETUP.md).

> :exclamation: To follow this part of the workshop we strongly advise you to have followed the workshop [Introduction to Rust](https://github.com/PoCInnovation/Workshops/tree/master/software/13.Rust).

> 💡 We recommend you to follow the [Tour of Rust](https://tourofrust.com/index.html) for this workshop.

### Step 1 - Display your first window with Tetra !

> :exclamation: We strongly advise you to use the resources given for this exercise.

The first step of this workshop is simple, you just need to display a basic window, with a title and a colored background.

For this, we will use throughout the workshop a framework called Tetra.

Tetra is a simple 2D game framework written in Rust. It uses SDL2 for event management and OpenGL 3.2+ for rendering.

This first window should be named `PoC_WorkShop` and have the following dimensions: `(800 x 500)`.

We just ask you to display a simple window with no content inside, the title is the name of the window and not any text inside.

To do this, create a file `main.rs` in a folder called `src`.

> 💡 Rust file has `rs` extension.

##### Resources
 - [Docs Tetra](https://docs.rs/tetra/0.6.3/tetra/)

### Step 2 - Let's be crazy and add some text to this page !

> :exclamation: We strongly advise you to use the resources given for this exercise.

Congratulations! 🎉

With the previous step, you have displayed your first window. Now, why not display some text in this window?

Using the font provided with the workshop, the file `DejaVuSansMono.ttf` must be in a folder `/assets/font/`.

To display text, you need to follow three steps:

1. Add the font to your program.

2. Create a variable `vector_text` with the value `Hello world!` and the font of your assets. `vector_text` uses the Text module.

3. Display `vector_text` in your window.

> 💡 This step like the others is important for the rest of the workshop, don't hesitate to look at the resources.

##### Resources
 - [Fonts with Tetra](https://docs.rs/tetra/0.2.18/tetra/graphics/text/struct.Font.html)
 - [Text with Tetra](https://docs.rs/tetra/0.2.18/tetra/graphics/text/struct.Text.html)
 - [Colors with Tetra](https://docs.rs/tetra/0.2.18/tetra/graphics/color/struct.Color.html)
 - [Maths with Tetra](https://docs.rs/tetra/0.4.0/tetra/math/index.html)

### Step 3 - Here we go to display an image !

> :exclamation: We strongly advise you to use the resources given for this exercise.

First, you need an image. Make sure you have a `PoC.png` file in the `assets/images` folder.

Your program must display an image with the parameter :
- The scale of type `Vec2`.

- The position of type `Vec2`.

- The origin of the image of type `Vec2`.

You now have all the necessary information to display an image in your window. 

It's up to you ! :thumbsup:

##### Resources
 - [Docs Tetra](https://docs.rs/tetra/0.6.3/tetra/)
 - [Texture](https://docs.rs/tetra/0.2.18/tetra/graphics/texture/struct.Texture.html)
 - [DrawParams](https://docs.rs/tetra/0.2.18/tetra/graphics/struct.DrawParams.html)

### Step 4 - Keyboard interactions and event management !

> :exclamation: We strongly advise you to use the resources given for this exercise.

The interactions between the user and your program are a mandatory part of creating a video game.

In this exercise, you will receive input from your keyboard to move an image `assets/images/player_one.png`.


Four keys will be used to move the image:
- `Z` to move the fish up.

- `Q` to move the fish to the left.

- `S` to move the fish down.

- `D` to move the fish to the right.


:dart: The objective is simple: Thanks to the previous exercises you can display a fish and now you have to make it move when you press the keys above.

##### Resources
 - [Tetra input](https://docs.rs/tetra/0.2.18/tetra/input/index.html)
 - [Tetra Texture](https://docs.rs/tetra/0.2.18/tetra/graphics/texture/struct.Texture.html)
 - [Tetra DrawParams](https://docs.rs/tetra/0.2.18/tetra/graphics/struct.DrawParams.html)

### Step 5 - Your first video game with Tetra and Rust !

> :exclamation: We strongly advise you to use the resources given for this exercise.

The serious things begin! :muscle:

This exercise aims to condense all the skills seen in this workshop and push it even further.

After this, you can officially say that you have created your first video game with Tetra in Rust.

You must all know the famous game `snake` created in 1976. The game consists of leading a snake that grows by collecting items and thus constituting an obstacle itself.
[For more information...](https://www.wikiwand.com/en/Snake_(video_game_genre))

For this last exercise we impose no constraints, the idea is simple to have a functional game.

You have zero limits, it's up to you to add as many options or features as possible.

:dart: The goal is to create your own snake game.

##### Resources
 - [Tetra input](https://docs.rs/tetra/0.2.18/tetra/input/index.html)
 - [Tetra Texture](https://docs.rs/tetra/0.2.18/tetra/graphics/texture/struct.Texture.html)
 - [Tetra DrawParams](https://docs.rs/tetra/0.2.18/tetra/graphics/struct.DrawParams.html)

 ## Bonus
Here are some bonus ideas if you want to venture further into the Rust adventure! 💪
 - Why not create your own game concepts or reproduce existing games.

> If you ever feel like sharing your creations, you can do it in the `software-chat` room on the Discord server `PoC - Community`.

## Further reading
 - [The Rust website](https://www.rust-lang.org/fr)
 - [Tour of Rust](https://tourofrust.com/00_en.html)

## Authors

| [<img src="https://github.com/ThisisYoYoDev.png?size=85" width=85><br><sub>Yoel EDERY</sub>](https://github.com/ThisisYoYoDev) | [<img src="https://github.com/nicolasheude.png?size=85" width=85><br><sub>Nicolas HEUDE</sub>](https://github.com/nicolasheude) 
| :---: | :---: |
<h2 align=center>
Organization
</h2>
<br/>
<p align='center'>
    <a href="https://www.linkedin.com/company/pocinnovation/mycompany/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
    <a href="https://www.instagram.com/pocinnovation/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://twitter.com/PoCInnovation">
        <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
    </a>
    <a href="https://discord.com/invite/Yqq2ADGDS7">
        <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white">
    </a>
</p>
<p align=center>
    <a href="https://www.poc-innovation.fr/">
        <img src="https://img.shields.io/badge/WebSite-1a2b6d?style=for-the-badge&logo=GitHub Sponsors&logoColor=white">
    </a>
</p>

> :rocket: Don't hesitate to follow us on our different networks, and put a star 🌟 on `PoC's` repositories.


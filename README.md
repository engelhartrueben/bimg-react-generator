<div align="center">
    <div>
         <img src="/assets/bimg.png" alt="bimg logo" />	
    </div>
<br>
<h1>React Generator</h1>

**simplify your pixel art**
</div>

> [!WARNING]
> This project is not complete. Currently, it is only capable of creating simple 1-bit pixel images in the browser. The save function is not yet complete.
>
> IF YOU REFRESH THE PAGE, YOUR IMAGE WILL BE FORGOTTON TO THE ETHER. There is a fix coming, but the road map is large and journey strenuous.

`bImg` is a simple 1-bit image format. This application allows for the creation of `.bimg` pictures... at some point... 

## Usage
- `yarn run dev` - start development server
- `yarn build` - build production version of the app
- `yarn run preivew` - locally proview production build

## Credit
[Cole](https://github.com/coal-rock) - I totally ripped this README format off of your [LaTex Tutor](https://github.com/coal-rock/latex-tutor)

## Road Map
In no particular order:
1. Allow user to click and drage to change multiple `divs` background color. Currently the user has to click each div they wish to change. Oof.
2. Store the users current image in localStorage. Ensuring that a refresh does not devistate an evenings work. 
3. Store each `div` state into an Array Buffer.
4. After the above done, save the bImg to a `.bimg` file and prompt user to download.
5. Create a way to view `.bimg` in your browser. Idk how are `.png` and `.jpeg` viewable everywhere? 

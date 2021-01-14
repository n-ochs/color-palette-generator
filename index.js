// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )


let Header = () => {
    return <div className="flex-grow"> 
        <h1 className="text-center font-bold">Color Palette Randomizer</h1>
    </div>
};

let Button = () => {
    return <div className="grid justify-items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-1 py-1 px-3 rounded">
            Randomize!
            </button>
    </div>
};

let Colors = () => {
    return <div className="flex flex-row h-screen">
        <div className="flex-auto border-t-4 border-r-2 border-b-4 border-l-4 border-black">1</div>
        <div className="flex-auto border-t-4 border-r-2 border-b-4 border-l-2 border-black">2</div>
        <div className="flex-auto border-t-4 border-r-2 border-b-4 border-l-2 border-black">3</div>
        <div className="flex-auto border-t-4 border-r-2 border-b-4 border-l-2 border-black">4</div>
        <div className="flex-auto border-t-4 border-r-4 border-b-4 border-l-2 border-black">5</div>
    </div>
};

let App = () => {
    return <div>
        <Header />
        <Button />
        <Colors />
    </div>
};


ReactDOM.render(<App />, document.getElementById('root'))
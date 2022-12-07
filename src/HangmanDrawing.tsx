
//Every limb is a div with properties that set their positions and shapes.
const HEAD = (
    <div style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
    }} />
);

const BODY = (
    <div style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0,
    }} />
);

const RIGHT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        transformOrigin: "left bottom",
        rotate: "-30deg"
    }} />
);
const LEFT_ARM = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "10px",
        transformOrigin: "right bottom",
        rotate: "30deg"
    }} />
);

const RIGHT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-90px",
        transformOrigin: "left bottom",
        rotate: "60deg"
    }} />
);

const LEFT_LEG = (
    <div style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: 0,
        transformOrigin: "right bottom",
        rotate: "-60deg"
    }} />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, LEFT_LEG, RIGHT_ARM, RIGHT_LEG]


type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            {/* BODY_PARTS is an array of all the limbs used (6 total), they will be revealed with each incorrect guess made by user*/}
            {BODY_PARTS.slice(0, numberOfGuesses)}
            {/* divs below represent parts of the gallows */}
            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right: 0, }} />
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }} />
            <div style={{ height: "10px", width: "250px", background: "black" }} />
        </div>
    )
}
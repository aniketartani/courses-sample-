import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import courses from "../data";

const course = data => {
    return(
        <Note
        name={data.title}
        img={data.img}
        />
    );
};

const App = () => {
    return(
        <div>
            <Header/>
            {courses.map(course)}
            <Footer />
        </div>
    );
};

export default App;

import "../style/skills.css";

export default function Skills(){
    return (
        <div className="whole">
            <h1>
                My <span>Skills</span>
            </h1>
            <div className="skills">
                <div className="up">
                    <div className="programming">
                        <h1>
                            Programming Languages
                        </h1>
                        <p>
                        Proficient in C, Python, and Java, I possess a strong foundation in core programming principles, data structures, and algorithms.
                        </p>
                    </div>
                    <div className="webDev">
                        <h1>
                            Web Development
                        </h1>
                        <p>
                        I create modern web experiences using ReactJS. My focus is on delivering seamless, high-performance interfaces that are both beautiful and intuitive.
                        </p>
                    </div>
                </div>
                <div className="down">
                    <div className="database">
                        <h1>
                            Databases
                        </h1>
                        <p>
                        I manage and optimize data with both relational (MySQL) and non-relational (MongoDB) databases, ensuring scalability and data integrity for web applications.
                        </p>
                    </div>
                    <div className="photography">
                        <h1>
                            Photography
                        </h1>
                        <p>
                        Also a Photography Enthusiast capturing light, stories, and moments. Convenor of Team Luminex Production club of Techno Main Salt Lake under IIC.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
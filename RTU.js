let x = document.getElementsByClassName(".dropbox").SelectedIndex;
console.log(x);

document.getElementById("dropbox").onchange = function () {
  const selectedValue = this.value;
  console.log(`Selected value:  ${selectedValue}`);
  if (selectedValue === "1") {
    const htmlContent = `<div class="grades">
            <div class="grades1">Grade in Engineering mathematics -1
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in Physics
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in BEE(Basic Electrical)
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in CS
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in PPS(Programming)
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Engineering Physics lab
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades7">Language Lab
                <select id="dropbox7">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades8">Computer Programming Lab
                <select id="dropbox8">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades9">BEE lab
                <select id="dropbox9">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades10">Computer Aided Engineering Graphics
                <select id="dropbox10">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades11">SODECA
                <select id="dropbox11">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>

        </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "2") {
    const htmlContent = `<div class="grades1">Grade in Engineering Mathematics -2
            <select id="dropbox1">
                <option value="10">A++</option>
                <option value="9">A+</option>
                <option value="8.5">A</option>
                <option value="8">B+</option>
                <option value="7.5">B</B></option>
                <option value="7">C+</option>
                <option value="6.5">C</option>
                <option value="6">D+</option>
                <option value="5.5">D</option>
                <option value="5">E+</option>
                <option value="4">E</option>
                <option value="0">F</option>
            </select>
        </div>
        <section class="grades2">Grade in Chemistry
            <select id="dropbox2">
                <option value="10">A++</option>
                <option value="9">A+</option>
                <option value="8.5">A</option>
                <option value="8">B+</option>
                <option value="7.5">B</B></option>
                <option value="7">C+</option>
                <option value="6.5">C</option>
                <option value="6">D+</option>
                <option value="5.5">D</option>
                <option value="5">E+</option>
                <option value="4">E</option>
                <option value="0">F</option>
            </select>
        </section>
        <section class="grades3">Grade in BME (Basic Machenical)
            <select id="dropbox3">
                <option value="10">A++</option>
                <option value="9">A+</option>
                <option value="8.5">A</option>
                <option value="8">B+</option>
                <option value="7.5">B</B></option>
                <option value="7">C+</option>
                <option value="6.5">C</option>
                <option value="6">D+</option>
                <option value="5.5">D</option>
                <option value="5">E+</option>
                <option value="4">E</option>
                <option value="0">F</option>
            </select>
        </section>
        <section class="grades4">Grade in Human Values
            <select id="dropbox4">
                <option value="10">A++</option>
                <option value="9">A+</option>
                <option value="8.5">A</option>
                <option value="8">B+</option>
                <option value="7.5">B</B></option>
                <option value="7">C+</option>
                <option value="6.5">C</option>
                <option value="6">D+</option>
                <option value="5.5">D</option>
                <option value="5">E+</option>
                <option value="4">E</option>
                <option value="0">F</option>
            </select>
        </section>
        <section class="grades5">Grade in Civil
            <select id="dropbox5">
                <option value="10">A++</option>
                <option value="9">A+</option>
                <option value="8.5">A</option>
                <option value="8">B+</option>
                <option value="7.5">B</B></option>
                <option value="7">C+</option>
                <option value="6.5">C</option>
                <option value="6">D+</option>
                <option value="5.5">D</option>
                <option value="5">E+</option>
                <option value="4">E</option>
                <option value="0">F</option>
            </select></section><section class="grades6">Human values LAB
                    <select id="dropbox6">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades7">Chemistry lab
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades8">Manufacturing practices
                    <select id="dropbox8">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades9">Civil LAB
                    <select id="dropbox9">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades10">Computer Aided Machine Drawing
                    <select id="dropbox10">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades11">SODECA
                <select id="dropbox11">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "3") {
    const htmlContent = `<div class="grades">
            <div class="grades1">Grade in Advance Engineering Mathematics
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in MEFA
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in Software Engineering
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in DE
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in DSA
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in OOPS
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
        <section class="grades7">DSA LAB
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades8">Object Oriented Programing lab
                    <select id="dropbox8">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades9">SE lab
                    <select id="dropbox9">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades10">Digital Electronics LAB
                    <select id="dropbox10">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades11">Industrial training
                    <select id="dropbox11">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades12">SODECA
                <select id="dropbox12">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "4") {
    const htmlContent = `<div class="grades">
            <div class="grades1">Grade in Discrete MAthematics Strucutre
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in TC
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in DBMS
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in MPI
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in DCCN
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in TOC
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
        <section class="grades7">MicroProcessor interfaces LAB
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades8">DataBase Management lab
                    <select id="dropbox8">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades9">Network Programming lab
                    <select id="dropbox9">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades10">LINUX shell programming LAB
                    <select id="dropbox10">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades11">JAVA LAB
                    <select id="dropbox11">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades12">SODECA
                <select id="dropbox12">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "5") {
    const htmlContent = `<div class="grades">
            <div class="grades1">Grade in ITC
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in Compiler Design
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in CGM
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in Analysis of Algorithm
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in Wireless Communication
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in OS
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades7">Grade in CGM LAB
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades8">Grade in CD lab
                    <select id="dropbox8">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades9"> Grade in AOA lab
                    <select id="dropbox9">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades10">ADV. Java LAB
                    <select id="dropbox10">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades11">Industrial Training
                    <select id="dropbox11">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades12">SODECA
                <select id="dropbox12">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
        </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "6") {
    let htmlContent = `<div class="grades">
            <div class="grades1">Grade in CAO
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in ISS
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in CC
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in AI
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in ML
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in DS
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades7">Grade in DIP
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades8">Grade in MAD lab
                    <select id="dropbox8">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades9">Grade in Python lab
                    <select id="dropbox9">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades10">Grade in DIP LAB
                    <select id="dropbox10">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades11"> Grade in ML Lab
                    <select id="dropbox11">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
                <section class="grades12"> Grade in SODECA
                <select id="dropbox12">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
        </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "7") {
    let htmlContent = `<div class="grades">
            <div class="grades1">Grade in EEDM
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in IOT
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in Iot lab
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in Cyber security lab
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in Industrial training
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in Seminar
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades7">Grade in Sodeca
                    <select id="dropbox7">
                        <option value="10">A++</option>
                        <option value="9">A+</option>
                        <option value="8.5">A</option>
                        <option value="8">B+</option>
                        <option value="7.5">B</B></option>
                        <option value="7">C+</option>
                        <option value="6.5">C</option>
                        <option value="6">D+</option>
                        <option value="5.5">D</option>
                        <option value="5">E+</option>
                        <option value="4">E</option>
                        <option value="0">F</option>
                    </select>
                </section>
        </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  } else if (selectedValue === "8") {
    let htmlContent = `<div class="grades">
            <div class="grades1">Grade in Big Data Analytics
                <select id="dropbox1">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </div>
            <section class="grades2">Grade in Big Data lab
                <select id="dropbox2">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades3">Grade in Software testing and validation 
                <select id="dropbox3">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades4">Grade in Project
                <select id="dropbox4">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades5">Grade in Disaster Management
                <select id="dropbox5">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
            <section class="grades6">Grade in SODECA
                <select id="dropbox6">
                    <option value="10">A++</option>
                    <option value="9">A+</option>
                    <option value="8.5">A</option>
                    <option value="8">B+</option>
                    <option value="7.5">B</B></option>
                    <option value="7">C+</option>
                    <option value="6.5">C</option>
                    <option value="6">D+</option>
                    <option value="5.5">D</option>
                    <option value="5">E+</option>
                    <option value="4">E</option>
                    <option value="0">F</option>
                </select>
            </section>
        </div>`;
    document.querySelector(".grades").innerHTML = htmlContent;
  }
  // Perform actions based on the selected value
};

document.getElementById("CGPA").onclick = function () {
  let maindropdown1 = document.getElementById("dropbox");
  let maindropdown = maindropdown1.value;

  if (maindropdown === "1") {
    let dropdown = document.getElementById("dropbox1");
    let em1 = dropdown.value;
    console.log(em1);
    let dropdown2 = document.getElementById("dropbox2");
    let ph = dropdown2.value;
    console.log(ph);
    let dropdown3 = document.getElementById("dropbox3");
    let bee = dropdown3.value;
    console.log(bee);
    let dropdown4 = document.getElementById("dropbox4");
    let hv = dropdown4.value;
    console.log(hv);
    let dropdown5 = document.getElementById("dropbox5");
    let pps = dropdown5.value;
    console.log(pps);
    let dropdown6 = document.getElementById("dropbox6");
    let pl = dropdown6.value;
    console.log(pl);
    let dropdown7 = document.getElementById("dropbox7");
    let ll = dropdown7.value;
    console.log(ll);
    let dropdown8 = document.getElementById("dropbox8");
    let cp = dropdown8.value;
    console.log(cp);
    let dropdown9 = document.getElementById("dropbox9");
    let beel = dropdown9.value;
    console.log(beel);
    let dropdown10 = document.getElementById("dropbox10");
    let caeg = dropdown10.value;
    console.log(caeg);
    let dropdown11 = document.getElementById("dropbox11");
    let sodeca = dropdown11.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(em1) * 4 +
        Number(ph) * 4 +
        Number(hv) * 2 +
        Number(bee) * 2 +
        Number(pps) * 2 +
        Number(pl) * 1 +
        Number(beel) * 1 +
        Number(cp) * 1.5 +
        Number(caeg) * 1.5 +
        Number(sodeca) * 0.5 +
        Number(ll) * 1) /
      20.5
    ).toFixed(3)}`;
  } else if (maindropdown === "2") {
    let dropdown = document.getElementById("dropbox1");
    let em2 = dropdown.value;
    console.log(em2);
    let dropdown2 = document.getElementById("dropbox2");
    let ch = dropdown2.value;
    console.log(ch);
    let dropdown3 = document.getElementById("dropbox3");
    let bme = dropdown3.value;
    console.log(bme);
    let dropdown4 = document.getElementById("dropbox4");
    let cs = dropdown4.value;
    console.log(cs);
    let dropdown5 = document.getElementById("dropbox5");
    let bce = dropdown5.value;
    console.log(bce);
    let dropdown6 = document.getElementById("dropbox6");
    let hvl = dropdown6.value;
    console.log(hvl);
    let dropdown7 = document.getElementById("dropbox7");
    let cl = dropdown7.value;
    console.log(cl);
    let dropdown8 = document.getElementById("dropbox8");
    let mp = dropdown8.value;
    console.log(mp);
    let dropdown9 = document.getElementById("dropbox9");
    let cil = dropdown9.value;
    console.log(cil);
    let dropdown10 = document.getElementById("dropbox10");
    let camd = dropdown10.value;
    console.log(camd);
    let dropdown11 = document.getElementById("dropbox11");
    let sodeca = dropdown11.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(em2) * 4 +
        Number(ch) * 4 +
        Number(cs) * 2 +
        Number(bme) * 2 +
        Number(bce) * 2 +
        Number(hvl) * 1 +
        Number(cl) * 1 +
        Number(mp) * 1.5 +
        Number(camd) * 1.5 +
        Number(sodeca) * 0.5 +
        Number(cil) * 1) /
      20.5
    ).toFixed(3)}`;
  } else if (maindropdown === "3") {
    let dropdown = document.getElementById("dropbox1");
    let aem = dropdown.value;
    console.log(aem);
    let dropdown2 = document.getElementById("dropbox2");
    let mefa = dropdown2.value;
    console.log(mefa);
    let dropdown3 = document.getElementById("dropbox3");
    let se = dropdown3.value;
    console.log(se);
    let dropdown4 = document.getElementById("dropbox4");
    let de = dropdown4.value;
    console.log(de);
    let dropdown5 = document.getElementById("dropbox5");
    let dsa = dropdown5.value;
    console.log(dsa);
    let dropdown6 = document.getElementById("dropbox6");
    let oops = dropdown6.value;
    console.log(oops);
    let dropdown7 = document.getElementById("dropbox7");
    let dsal = dropdown7.value;
    console.log(dsal);
    let dropdown8 = document.getElementById("dropbox8");
    let oopsl = dropdown8.value;
    console.log(oopsl);
    let dropdown9 = document.getElementById("dropbox9");
    let sel = dropdown9.value;
    console.log(sel);
    let dropdown10 = document.getElementById("dropbox10");
    let del = dropdown10.value;
    console.log(del);
    let dropdown11 = document.getElementById("dropbox11");
    let its = dropdown11.value;
    console.log(its);
    let dropdown12 = document.getElementById("dropbox11");
    let sodeca = dropdown12.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(aem) * 3 +
        Number(mefa) * 2 +
        Number(de) * 3 +
        Number(dsa) * 3 +
        Number(oops) * 3 +
        Number(se) * 3 +
        Number(dsal) * 1.5 +
        Number(oopsl) * 1.5 +
        Number(sel) * 1.5 +
        Number(sodeca) * 0.5 +
        Number(its) * 1 +
        Number(del) * 1.5) /
      24.5
    ).toFixed(3)}`;
  } else if (maindropdown === "4") {
    let dropdown = document.getElementById("dropbox1");
    let dms = dropdown.value;
    console.log(dms);
    let dropdown2 = document.getElementById("dropbox2");
    let tc = dropdown2.value;
    console.log(tc);
    let dropdown3 = document.getElementById("dropbox3");
    let dbms = dropdown3.value;
    console.log(dbms);
    let dropdown4 = document.getElementById("dropbox4");
    let mpi = dropdown4.value;
    console.log(mpi);
    let dropdown5 = document.getElementById("dropbox5");
    let dccn = dropdown5.value;
    console.log(dccn);
    let dropdown6 = document.getElementById("dropbox6");
    let toc = dropdown6.value;
    console.log(toc);
    let dropdown7 = document.getElementById("dropbox7");
    let mpil = dropdown7.value;
    console.log(mpil);
    let dropdown8 = document.getElementById("dropbox8");
    let dbmsl = dropdown8.value;
    console.log(dbmsl);
    let dropdown9 = document.getElementById("dropbox9");
    let npl = dropdown9.value;
    console.log(npl);
    let dropdown10 = document.getElementById("dropbox10");
    let lnl = dropdown10.value;
    console.log(lnl);
    let dropdown11 = document.getElementById("dropbox11");
    let jl = dropdown11.value;
    console.log(jl);
    let dropdown12 = document.getElementById("dropbox11");
    let sodeca = dropdown12.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(dms) * 3 +
        Number(tc) * 2 +
        Number(mpi) * 3 +
        Number(dbms) * 3 +
        Number(toc) * 3 +
        Number(dccn) * 3 +
        Number(mpil) * 1 +
        Number(dbmsl) * 1.5 +
        Number(npl) * 1.5 +
        Number(sodeca) * 0.5 +
        Number(lnl) * 1 +
        Number(jl) * 1) /
      23.5
    ).toFixed(3)}`;
  } else if (maindropdown === "5") {
    let dropdown = document.getElementById("dropbox1");
    let itc = dropdown.value;
    console.log(itc);
    let dropdown2 = document.getElementById("dropbox2");
    let cd = dropdown2.value;
    console.log(cd);
    let dropdown3 = document.getElementById("dropbox3");
    let cgm = dropdown3.value;
    console.log(cgm);
    let dropdown4 = document.getElementById("dropbox4");
    let aoa = dropdown4.value;
    console.log(aoa);
    let dropdown5 = document.getElementById("dropbox5");
    let wc = dropdown5.value;
    console.log(wc);
    let dropdown6 = document.getElementById("dropbox6");
    let os = dropdown6.value;
    console.log(os);
    let dropdown7 = document.getElementById("dropbox7");
    let cgl = dropdown7.value;
    console.log(cgl);
    let dropdown8 = document.getElementById("dropbox8");
    let cdl = dropdown8.value;
    console.log(cdl);
    let dropdown9 = document.getElementById("dropbox9");
    let aoal = dropdown9.value;
    console.log(aoal);
    let dropdown10 = document.getElementById("dropbox10");
    let ajl = dropdown10.value;
    console.log(ajl);
    let dropdown11 = document.getElementById("dropbox11");
    let its = dropdown11.value;
    console.log(its);
    let dropdown12 = document.getElementById("dropbox11");
    let sodeca = dropdown12.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(itc) * 2 +
        Number(cd) * 3 +
        Number(os) * 3 +
        Number(aoa) * 3 +
        Number(cgm) * 3 +
        Number(wc) * 2 +
        Number(aoal) * 1 +
        Number(cgl) * 1 +
        Number(cdl) * 1 +
        Number(sodeca) * 0.5 +
        Number(ajl) * 1 +
        Number(its) * 2.5) /
      23
    ).toFixed(3)}`;
  } else if (maindropdown === "6") {
    let dropdown = document.getElementById("dropbox1");
    let cao = dropdown.value;
    console.log(cao);
    let dropdown2 = document.getElementById("dropbox2");
    let iss = dropdown2.value;
    console.log(iss);
    let dropdown3 = document.getElementById("dropbox3");
    let cc = dropdown3.value;
    console.log(cc);
    let dropdown4 = document.getElementById("dropbox4");
    let ai = dropdown4.value;
    console.log(ai);
    let dropdown5 = document.getElementById("dropbox5");
    let ml = dropdown5.value;
    console.log(ml);
    let dropdown6 = document.getElementById("dropbox6");
    let ds = dropdown6.value;
    console.log(ds);
    let dropdown7 = document.getElementById("dropbox7");
    let dip = dropdown7.value;
    console.log(dip);
    let dropdown8 = document.getElementById("dropbox8");
    let madl = dropdown8.value;
    console.log(madl);
    let dropdown9 = document.getElementById("dropbox9");
    let pyl = dropdown9.value;
    console.log(pyl);
    let dropdown10 = document.getElementById("dropbox10");
    let dipl = dropdown10.value;
    console.log(dipl);
    let dropdown11 = document.getElementById("dropbox11");
    let mll = dropdown11.value;
    console.log(mll);
    let dropdown12 = document.getElementById("dropbox12");
    let sodeca = dropdown12.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(dip) * 2 +
        Number(ml) * 3 +
        Number(cao) * 3 +
        Number(iss) * 2 +
        Number(cc) * 3 +
        Number(ai) * 2 +
        Number(ds) * 2 +
        Number(dipl) * 1.5 +
        Number(mll) * 1.5 +
        Number(sodeca) * 0.5 +
        Number(pyl) * 1.5 +
        Number(madl) * 1.5) /
      23.5
    ).toFixed(3)}`;
  } else if (maindropdown === "7") {
    let dropdown = document.getElementById("dropbox1");
    let eedm = dropdown.value;
    console.log(eedm);
    let dropdown2 = document.getElementById("dropbox2");
    let iot = dropdown2.value;
    console.log(iot);
    let dropdown3 = document.getElementById("dropbox3");
    let iotl = dropdown3.value;
    console.log(iotl);
    let dropdown4 = document.getElementById("dropbox4");
    let csl = dropdown4.value;
    console.log(csl);
    let dropdown5 = document.getElementById("dropbox5");
    let its = dropdown5.value;
    console.log(its);
    let dropdown6 = document.getElementById("dropbox6");
    let seminar = dropdown6.value;
    console.log(seminar);
    let dropdown7 = document.getElementById("dropbox7");
    let sodeca = dropdown7.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(eedm) * 3 +
        Number(iot) * 3 +
        Number(iotl) * 2 +
        Number(csl) * 2 +
        Number(its) * 2.5 +
        Number(seminar) * 2 +
        Number(sodeca) * 0.5) /
      15.0
    ).toFixed(3)}`;
  } else if (maindropdown === "8") {
    let dropdown = document.getElementById("dropbox1");
    let bda = dropdown.value;
    console.log(bda);
    let dropdown2 = document.getElementById("dropbox2");
    let bdal = dropdown2.value;
    console.log(bdal);
    let dropdown3 = document.getElementById("dropbox3");
    let stvl = dropdown3.value;
    console.log(stvl);
    let dropdown4 = document.getElementById("dropbox4");
    let project = dropdown4.value;
    console.log(project);
    let dropdown5 = document.getElementById("dropbox5");
    let dm = dropdown5.value;
    console.log(dm);
    let dropdown6 = document.getElementById("dropbox6");
    let sodeca = dropdown6.value;
    console.log(sodeca);

    document.querySelector(".result").textContent = `Your SGPA is :${(
      (Number(bda) * 3 +
        Number(bdal) * 2 +
        Number(stvl) * 1 +
        Number(project) * 7 +
        Number(dm) * 3 +
        Number(sodeca) * 0.5) /
      16.5
    ).toFixed(3)}`;
  }
};

import React, { useContext } from "react";
import SearchInput from "../users/SearchInput";
import diamond from "../../images/skills/diamond.svg";
import heart from "../../images/skills/heart.svg";
import version from "../../images/skills/version.svg";
import sortIcon from "../../images/skills/sortIcon.svg";
import "./skills.css";
import { UsuarioContext } from "../../context/UsuarioContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

const Skills = () => {
  const { usuario } = useContext(UsuarioContext);
  const { nombre, role, level } = usuario;
  return (
    <>
      <main>
        <div className="main-content">
          <div className="info-content ">
            <div className="blockTitle ">
              <h1>Skill Matrix</h1>
              <SearchInput />
            </div>
            <div className="blockProgress">
              <div className="blockName">
                <h1>{nombre ? nombre : "Juan Puerto"}</h1>
                <h4>Senior Creative Designer</h4>
              </div>
              <div className="blockImage">
                <p className="bold">20%</p>
                <span>of Matrix</span>
              </div>
            </div>
          </div>
          <div className="modeContent ">
            <div className="habilities  ">
              <div className="hability">
                <img src={diamond} alt="" />
                <span>Hardskills</span>
              </div>
              <div className="hability">
                <img src={heart} alt="" />
                <span>Competences</span>
              </div>
              <div className="hability">
                <img src={version} alt="" />
                <span>Versions</span>
              </div>
            </div>
            <button>Save version</button>
          </div>
          <div className="sortContent ">
            <span>Sort: </span>
            <img src={sortIcon} alt="" />
          </div>
          <div className="tableContent">
            <table class="table table-responsive table-responsive-md  table-responsive-md caption-top">
              <thead>
                <tr>
                  <th scope="col">Skill</th>
                  <th scope="col">Role Level</th>
                  <th scope="col">Valoration</th>
                  <th scope="col">Result</th>
                  <th scope="col">Action Plan</th>
                  <th scope="col">Progress</th>
                  <th scope="col">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>
                    <div className="content-select">
                      <select name="" id="">
                        <option value="Familiar">Click to evaluate</option>
                        <option value="Familiar">Familiar</option>
                        <option value="Fluent">Fluent</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Proficient">Proficient</option>
                        <option value="Expert">Expert</option>
                      </select>
                      <i></i>
                    </div>
                  </td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Skills;

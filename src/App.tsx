import './App.css';
import {SuperButton} from "./components/SuperButton.tsx";
import {SuperCrosses} from "./components/SuperCrosses.tsx";
import styles from './components/Superbutton.module.css'

export const App = () => {

    const cross = [
        { id: 1, model: "ADIDAS", size: "XXX" },
        { id: 2, model: "ABIBAS", size: "YYY" },
        { id: 3, model: "PUMA", size: "ZZZ" },
    ];

    return (
        <div>
            <SuperButton onClick={()=>{}} className={styles.redForSuperButton}>
                Red super Button
            </SuperButton>

            <SuperButton onClick={()=>{}} className={styles.blueForSuperButton}>
            Blue super Button
            </SuperButton>

            <SuperCrosses crosses={cross}>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <SuperButton color={"red"}>Red superbutton</SuperButton>
                <SuperButton color={"secondary"}>Secondary superbutton</SuperButton>
                <SuperButton>Default superbutton</SuperButton>
                <SuperButton disabled>Disabled superbutton</SuperButton>
            </SuperCrosses>

            <SuperCrosses crosses={cross}>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <SuperButton color={"red"}>Red superbutton</SuperButton>
                <SuperButton color={"secondary"}>Secondary superbutton</SuperButton>
            </SuperCrosses>

            <SuperCrosses crosses={cross}>
                <input type={"text"}/>
                <input type={"text"}/>
                <input type={"text"}/>
                <input type={"text"}/>
                <div>Ky4a info</div>
                <div>Ky4a info</div>
                <SuperButton color={"red"}>Red superbutton</SuperButton>
                <SuperButton color={"secondary"}>Secondary superbutton</SuperButton>
            </SuperCrosses>

         {/*   <Modal>
                <h2>lorem lorem lorem</h2>
                <input type={'email'} placeholder={'email'}/>
                <input type={'password'} placeholder={'pass'}/>
                <input type={'password'} placeholder={'pass'}/>
                <label>
                    <input type={'checkbox'}/>
                    i agree
                </label>
                <SuperButton type={"submit"}>send</SuperButton>
            </Modal>*/}


        </div>
    );
}

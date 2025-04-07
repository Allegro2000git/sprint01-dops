import {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

const defaultMoney: MoneyType[] = [
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]

export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[]  => {
    return (filter === "All") ? money : money.filter(el => el.banknote === filter)
}


export const App = () => {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney  = (banknote: BanknotsType) => {
        setMoney([...money, {banknote, nominal: 100,  id: v1()}])
    }

   const removeMoney = (key: BanknotsType) => {
         const index = money.findIndex(el => el.banknote === key)
          if (index !== -1) {
              setMoney(money.filter((el, i) => i !== index))
         }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

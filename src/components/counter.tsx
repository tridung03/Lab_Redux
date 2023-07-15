import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [isDisplay, setDisplay] = useState<boolean>(false); // isDisplay = false
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [canbo, setcanbo] = useState<string>("");
    const [level, setLevel] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);
    const [result, setResult] = useState<number>(0);
    const [day, setDay] = useState<number>(0);


    const handldesubmit = () => {
        let newErrors: string[] = [];
        if (!name || name.length === 0) {
            newErrors.push("Tên is required!");
        } else if (name.length < 2) {
            newErrors.push("Tên trên 2 ký tự!");
        }
        if (!email || email.length === 0) {
            newErrors.push("Email is required!");
        } else if (name.length < 12) {
            newErrors.push("Email trên 12 ký tự!");
        } if (!level || level.length === 0) {
            newErrors.push("Cấp bậc is required!");
        }
        if (!day || day.toString().length === 0) {
            newErrors.push("Ngày nằm viện is required!");
        }
        else if (day < 0) {
            newErrors.push("Số ngày nằm viện không được âm!");
        }
        if (!canbo || canbo.length === 0) {
            newErrors.push("Cán bộ is required!");

        }
        if (level === "mot") {
            setResult(day * 1200)
        }
        if (level === "hai") {
            setResult(day * 2400)
        } if (level === "ba") {
            setResult(day * 3600)
        }
        setDisplay(true)


        setErrors((prevErrors) => {
            const uniqueErrors = new Set([...prevErrors, ...newErrors]);
            return Array.from(uniqueErrors);
        })

    }
    return (
        <form action="">
            <div >
                <div >
                    <div className="mb-6">
                        <label >Tên</label>
                        <input onChange={(event) => setName(event.target.value)} type="text" id="default-input" className="" />
                    </div>
                    <div className="mb-6">
                        <label>Email</label>
                        <input onChange={(event) => setEmail(event.target.value)} type="text" id="default-input" className="" />
                    </div>

                    <div >
                        <input id="default-radio-1" type="radio" value="" name="default-radio" />
                        <label >Nữ</label>
                    </div>
                    <div >
                        <input id="default-radio-1" type="radio" value="" name="default-radio" />
                        <label >Nam</label>
                    </div>
                    <label >Lựa chọn cấp bậc</label>
                    <select onChange={(event) => setLevel(event.target.value)} id="capbac" >
                        <option selected value="">---</option>
                        <option value="mot">1</option>
                        <option value="hai">2</option>
                        <option value="ba">3</option>
                    </select>
                    <div >
                        <label > Ngày nằm viện</label>
                        <input onChange={(event) => setDay(+event.target.value)} type="number" id="default-input" />
                    </div>
                    <label>Lựa chọn cán bộ</label>
                    <select onChange={(event) => setcanbo(event.target.value)} id="canbo" >
                        <option selected>---</option>
                        <option value="nhân viên">Nhân viên</option>
                        <option value="cán bộ">Cán bộ</option>
                        <option value="quản lý">Quản lý</option>
                    </select>
                    <button type="button" onClick={handldesubmit}>Default</button>
                </div>
            </div>
            {isDisplay ? (
                <h2>
                    Tôi là {name}, email Tôi là {email}, chức vụ là: {canbo}, được tri trả: {result}
                </h2>

            ) : (
                <></>
            )
            }
            {
                errors.length > 0 && (
                    <ul>
                        {
                            errors.map((err, index) => (
                                <li key={index}>{err}</li>
                            )
                            )
                        }
                    </ul>
                )
            }
        </form >
    )
}

export default Counter
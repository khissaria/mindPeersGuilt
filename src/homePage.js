import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import bg from './bg.png';
import { useHistory, useLocation } from "react-router-dom";


const HomePage = () => {

    const [isHead, setIsHead] = useState(false);
    const [isThroat, setIsThroat] = useState(false);
    const [isStomach, setIsStomach] = useState(false);
    const [isCalves, setIsCalves] = useState(false);
    const [isShoulder, setIsShoulder] = useState(false);
    const [isFinger, setIsFinger] = useState(false);
    const [isToes, setIsToes] = useState(false);
    const [isEars, setIsEars] = useState(false);

    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        for (var key of params.keys()) {
            debugger;
            if (params.get(key) === 'true') {
                const queryVal = '.' + key;
                const buttonId = '#' + key;
                const elements = document.querySelectorAll(queryVal);
                const btn = document.querySelector(buttonId);
                btn.classList.add('button-active');
                btn.classList.remove('button');
                [].forEach.call(elements, function (element) {
                    element.classList.add('b');
                    element.classList.remove('a');
                });
                if (key === 'head') {
                    setIsHead(true);
                }
                else if (key === 'throat') {
                    setIsThroat(true);
                }
                else if (key === 'stomach') {
                    setIsStomach(true);
                }
                else if (key === 'calves') {
                    setIsCalves(true);
                }
                else if (key === 'shoulder') {
                    setIsShoulder(true);
                }
                else if (key === 'fingers') {
                    setIsFinger(true);
                }
                else if (key === 'toes') {
                    setIsToes(true);
                }
                else if (key === 'ears') {
                    setIsEars(true);
                }

            }
            else {
                const queryVal = '.' + key;
                const buttonId = '#' + key;
                const elements = document.querySelectorAll(queryVal);
                const btn = document.querySelector(buttonId);
                btn.classList.remove('button-active');
                btn.classList.add('button');
                [].forEach.call(elements, function (element) {
                    element.classList.add('a');
                    element.classList.remove('b');
                });
                if (key === 'head') {
                    setIsHead(false);
                }
                else if (key === 'throat') {
                    setIsThroat(false);
                }
                else if (key === 'stomach') {
                    setIsStomach(false);
                }
                else if (key === 'calves') {
                    setIsCalves(false);
                }
                else if (key === 'shoulder') {
                    setIsShoulder(false);
                }
                else if (key === 'fingers') {
                    setIsFinger(false);
                }
                else if (key === 'toes') {
                    setIsToes(false);
                }
                else if (key === 'ears') {
                    setIsEars(false);
                }

            }

        }
    }, [])
    function handleSubmitClick(e) {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Ears: isEars, Head: isHead, Toes: isToes, Calves: isCalves, Throat: isThroat, Fingers: isFinger, Stomach: isStomach, Shoulder: isShoulder })
        };

        console.log(requestOptions);
        fetch('https://retoolapi.dev/8mrD6P/data', requestOptions)
            .then(response => response.json())
            .then(data => alert('Data has been submitted with ID as ' + data.id + '. You can check the same at https://retoolapi.dev/8mrD6P/data/' + data.id));
    }
    function toggleButton(e) {
        var queryStringParam = e.target.name;
        var bodyPart = '.' + e.target.name;
        var elements = document.querySelectorAll(bodyPart);
        if (e.target.className === 'button-active') {
            e.target.classList.add('button');
            e.target.classList.remove('button-active');
            [].forEach.call(elements, function (element) {
                element.classList.add('a');
                element.classList.remove('b');
            });
            let searchParams = new URLSearchParams(location.search);
            searchParams.delete(queryStringParam);
            history.push({
                pathname: '/',
                search: searchParams.toString()
            });

        }
        else if (e.target.className === 'button') {
            e.target.classList.add('button-active');
            e.target.classList.remove('button');
            [].forEach.call(elements, function (element) {
                element.classList.add('b');
                element.classList.remove('a');
            });
            let searchParams = new URLSearchParams(location.search);
            searchParams.set(queryStringParam, true);
            console.log(searchParams);
            history.push({
                pathname: '/',
                search: searchParams.toString()
            });
        }
    }
    return (
        <div className='bg' style={{ backgroundImage: `url(${bg})` }}>
            <div className='header-text'>
                <h1>Where do you feel the Guilt?</h1>
                <span>Mark Where You Feel The Emotion On The Body</span>
            </div>
            <div className="human-body">
                <svg xmlns="http://www.w3.org/2000/svg" width="131.912" height="310.585" viewBox="0 0 131.912 310.585"><g transform="translate(-0.142 -4.578)">
                    <path className="a throat" d="M57.691,50.261,54.064,71.243H79.59L75.177,48.966s.128.355-6.6,1.3A33.2,33.2,0,0,1,57.691,50.261Z" transform="translate(0 4)" />
                    <path className="a body" d="M337.488,459.205a10.528,10.528,0,0,0,10.524,9.882c.206,0,.416,0,.63-.019a10.514,10.514,0,0,0,9.912-11.093c-.514-8.724-.746-16.67-.746-23.907-.045-31.766,4.611-49.613,9.184-58.929V572.058a16.307,16.307,0,0,0,32.614,0V453.63h6.112V572.058a16.307,16.307,0,0,0,32.614,0V375.2a55.9,55.9,0,0,1,2.348,5.56c3.718,10.246,6.843,27.065,6.832,53.313,0,7.233-.232,15.183-.742,23.909a10.511,10.511,0,0,0,9.92,11.086c.21.012.417.019.626.019a10.528,10.528,0,0,0,10.52-9.886c.533-9.094.781-17.446.781-25.125-.053-39.6-6.412-61.514-15.082-74.69a37.138,37.138,0,0,0-14.084-13.06,25.086,25.086,0,0,0-11.128-2.806,15.316,15.316,0,0,0-1.865.1.047.047,0,0,0-.022,0H378.888c-.008,0-.019,0-.026,0h0a15.228,15.228,0,0,0-1.861-.1,25.114,25.114,0,0,0-11.128,2.8,31.1,31.1,0,0,0-6.505,4.366c-5,4.308-9.856,10.888-13.592,20.354-3.362,8.453-6.034,19.25-7.587,33.33a274.63,274.63,0,0,0-1.482,29.7C336.7,441.756,336.951,450.107,337.488,459.205Zm0,0" transform="translate(-336.561 -273.114)" />
                    <path className="a shoulder" d="M-11328.082,1341.3c11.22,0,27.838-2.42,37.375,1.258,10.961,4.225,14.952,14.7,14.952,14.7s-25.321,13.442-50.772,13.442-51.032-13.442-51.032-13.442,3.334-10.586,17.608-15.4C-11352.9,1339.484-11336.615,1341.3-11328.082,1341.3Z" transform="translate(11392.617 -1270.341)" />
                    <path className="a head" d="M433.829,303.9q0,1.452-.142,2.893a28.524,28.524,0,0,1-.427,2.866c-.188.95-.424,1.883-.706,2.81s-.611,1.834-.983,2.728-.788,1.767-1.246,2.619-.957,1.681-1.5,2.484-1.118,1.579-1.733,2.325a28.806,28.806,0,0,1-1.958,2.147,27.973,27.973,0,0,1-2.157,1.947q-1.127.918-2.338,1.726t-2.5,1.49q-1.282.68-2.634,1.238c-.9.372-1.811.693-2.738.975s-1.873.515-2.826.706-1.913.33-2.881.424-1.935.143-2.907.143-1.944-.049-2.911-.143-1.925-.236-2.881-.424-1.895-.424-2.822-.706-1.846-.6-2.742-.975-1.779-.785-2.634-1.238-1.688-.953-2.5-1.49-1.587-1.114-2.338-1.726a29.957,29.957,0,0,1-4.116-4.093q-.922-1.119-1.733-2.325t-1.5-2.484q-.687-1.278-1.246-2.619a28.814,28.814,0,0,1-.979-2.728,28.106,28.106,0,0,1-.71-2.81,28.515,28.515,0,0,1-.427-2.866q-.141-1.441-.143-2.893t.143-2.892a28.53,28.53,0,0,1,.427-2.867,28.172,28.172,0,0,1,.71-2.81c.28-.923.607-1.834.979-2.727s.788-1.763,1.246-2.619a28.98,28.98,0,0,1,1.5-2.484q.81-1.2,1.733-2.326c.619-.746,1.269-1.463,1.958-2.146s1.407-1.332,2.157-1.948,1.531-1.189,2.338-1.725,1.643-1.032,2.5-1.49,1.733-.867,2.634-1.238,1.811-.694,2.742-.976,1.868-.514,2.822-.7,1.913-.33,2.881-.425,1.939-.142,2.911-.142,1.939.049,2.907.142,1.929.236,2.881.425,1.895.424,2.826.7,1.842.608,2.738.976,1.779.784,2.634,1.238,1.692.953,2.5,1.49,1.587,1.114,2.338,1.725,1.47,1.265,2.157,1.948,1.339,1.4,1.958,2.146,1.193,1.523,1.733,2.326,1.039,1.632,1.5,2.484.874,1.726,1.246,2.619.7,1.8.983,2.727.518,1.861.706,2.81a28.539,28.539,0,0,1,.427,2.867Q433.828,302.446,433.829,303.9Zm0,0" transform="translate(-338.362 -269.801)" />
                    <path className="a fingers" d="M-11281.939,1458.16c2.493-1.977,17.077-1.977,19.466,0,1.5,1.245-1.2,6.861-4.675,8.93a10.464,10.464,0,0,1-5.372,1.221,10.667,10.667,0,0,1-4.047-.767C-11280.389,1465.98-11283.869,1459.69-11281.939,1458.16Z" transform="translate(11393 -1272.341)" />
                    <path className="a toes" d="M-11281.635,1458.981c3.873-3.072,26.531-3.072,30.244,0,2.338,1.935-1.857,10.659-7.264,13.875a16.267,16.267,0,0,1-8.348,1.9,16.571,16.571,0,0,1-6.287-1.192C-11279.227,1471.131-11284.633,1461.358-11281.635,1458.981Z" transform="translate(11352.03 -1159.591)" />
                    <path className="a toes" d="M-11281.635,1458.981c3.873-3.072,26.531-3.072,30.244,0,2.338,1.935-1.857,10.659-7.264,13.875a16.267,16.267,0,0,1-8.348,1.9,16.571,16.571,0,0,1-6.287-1.192C-11279.227,1471.131-11284.633,1461.358-11281.635,1458.981Z" transform="translate(11313.03 -1159.591)" />
                    <path className="a stomach" d="M71.229,123.993c-5.9,2.988-7.684,14.37-6.83,23.334s10.6,11.525,16.5,8.537,7.968-11.525,7.114-20.488S77.134,121.005,71.229,123.993Z" />
                    <rect className="a calves" width="26" height="32" rx="4" transform="translate(33 250.659)" />
                    <rect className="a calves" width="26" height="32" rx="4" transform="translate(72 250.659)" />
                    <path className="a ears" d="M4.6-.463C7.64-.463,9.186,2.462,9.186,5.5S7.64,11.892,4.6,11.892,4.1,8.25,4.1,5.5,1.565-.463,4.6-.463Z" transform="translate(89.32 28.597)" />
                    <path className="a ears" d="M7.692,11.892c-3.038,0-4.583-2.925-4.583-5.963S4.654-.463,7.692-.463s.5,3.642.5,6.392S10.73,11.892,7.692,11.892Z" transform="translate(29.972 28.597)" /></g></svg>
            </div>


            <div className='button-body'>
                <div className="button-column">
                    <button className='button' name='head' id='head' onClick={(e) => { toggleButton(e); setIsHead(!isHead) }}>Head</button>
                    <button className='button' name='throat' id='throat' onClick={(e) => { toggleButton(e); setIsThroat(!isThroat) }}>Throat</button>
                    <button className='button' name='stomach' id='stomach' onClick={(e) => { toggleButton(e); setIsStomach(!isStomach) }}>Stomach</button>
                    <button className='button' name='calves' id='calves' onClick={(e) => { toggleButton(e); setIsCalves(!isCalves) }}>Calves</button>

                </div>
                <div className="button-column">
                    <button className='button' name='shoulder' id='shoulder' onClick={(e) => { toggleButton(e); setIsShoulder(!isShoulder) }}>Shoulder</button>
                    <button className='button' name='fingers' id='fingers' onClick={(e) => { toggleButton(e); setIsFinger(!isFinger) }}>Finger</button>
                    <button className='button' name='toes' id='toes' onClick={(e) => { toggleButton(e); setIsToes(!isToes) }}>Toes</button>
                    <button className='button' name='ears' id='ears' onClick={(e) => { toggleButton(e); setIsEars(!isEars) }}>Ears</button>
                </div>


            </div>

            <button type='submit' className='btnSubmit' onClick={handleSubmitClick}>SUBMIT</button>
        </div>
    );
}

export default HomePage;

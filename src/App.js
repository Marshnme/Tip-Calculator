
import React,{useState,useEffect} from 'react';
import './App.css';


function App() {

	const [bill,setBill] = useState(0);
	const [tipPerc,setTip] = useState(0);
	const [people, setPeople] = useState(0);
	const [tipTotal,setTipTotal] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		
	  },[]);

	return (
    	<div className="App">
      		<div className="container">
        		<header>
					<div>
						<h1>SPLI</h1>
          				<h1>TTER</h1>
					</div>
          			
        		</header>
        		<main>
          			<div className="calc-parent">
						<div className="left-side">
							<div className="bill-total-parent">
								<div className="bill-title">
									<h2>Bill</h2>
								</div>
								<div className="bill-total">
									<input placeholder="$" onChange={e => setBill(e.target.value)}></input>
								</div>
							</div>

							<div className="tip-selection-parent">
								<div className="tip-perc-title">
									<h3>Select Tip %</h3>
								</div>
								<div className="perc-buttons">
									<button className="button" onClick={()=>setTip(.05)}>5%</button>
									<button className="button" onClick={()=>setTip(.10)}>10%</button>
									<button className="button" onClick={()=>setTip(.15)}>15%</button>
									<button className="button" onClick={()=>setTip(.25)}>25%</button>
									<button className="button" onClick={()=>setTip(.5)}>50%</button>
									<button className="button">Custom</button>
								</div>
							</div>
{console.log(tipPerc)}
							<div className="party-count">
								<div className="party-title">
									<h3>Number of People</h3>
								</div>

								<div className="party-input-parent">
									<input className="party-input" placeholder="5"></input>
								</div>
							</div>
						</div>

						<div className="results-parent">
							<div className="tip-amount-parent">
								<div>
									<h3>Tip Amount</h3>
									<p>/ person</p>
								</div>

								<div>
									<p>$4.27</p>
								</div>
							</div>

							<div className="total-per-person">
								<div>
									<h3>Total</h3>
									<p>/ person</p>
								</div>
								
								<div>
									<p>$32.79</p>
								</div>
							</div>

							<button className="reset-button">RESET</button>
						</div>
		  			</div>
        		</main>
      		</div>
      
			<div class="attribution">
				Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
				Coded by <a href="#">Your Name Here</a>.
			</div>
		</div>
  	);
}

export default App;

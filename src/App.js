
import './App.css';

function App() {
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

						<div className="bill-total-parent">
							<div className="bill-title">
								<h2>Bill</h2>
							</div>
							<div className="bill-total">
								<input placeholder="$"></input>
							</div>
						</div>

						<div className="tip-selection-parent">
							<div className="tip-perc-title">
								<h3>Select Tip %</h3>
							</div>
							<div className="perc-buttons">
								<button className="button">5%</button>
								<button className="button">10%</button>
								<button className="button">15%</button>
								<button className="button">25%</button>
								<button className="button">50%</button>
								<button className="button">Custom</button>
							</div>
          				</div>

						<div className="party-count">
							<div className="party-title">
								<h3>Number of People</h3>
							</div>

							<div className="party-input-parent">
								<input className="party-input" placeholder="5"></input>
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


import './App.css';

function App() {
	return (
    	<div className="App">
      		<div className="container">
        		<header>
          			<h1>SPLI</h1>
          			<br />
          			<h1>TTER</h1>
        		</header>
        		<main>
          			<div className="calc-parent">

						<div className="bill-total-parent">
							<div className="bill-Parent">
								<h2>Bill</h2>
							</div>
							<div className="bill-Total">
								<input placeholder="$"></input>
							</div>
						</div>

						<div className="tip-Selection">
							<div>
								<h3>Select Tip %</h3>
							</div>
							<div>
								<button>5%</button>
								<button>10%</button>
								<button>15%</button>
								<button>25%</button>
								<button>50%</button>
								<button>Custom</button>
							</div>
          				</div>

						<div className="people-Count">
							<div>
								<h3>Number of People</h3>
							</div>

							<div>
								<input placeholder="5"></input>
							</div>
						</div>

						<div className="totals">
							<div className="tip-Amount">
								<div>
									<h3>Tip Amount</h3>
									<p>/ person</p>
								</div>

								<div>
									<p>$4.27</p>
								</div>
							</div>

							<div className="total-Per-Person">
								<div>
									<h3>Total</h3>
									<p>/ person</p>
								</div>
								
								<div>
									<p>$32.79</p>
								</div>
							</div>

							<button>RESET</button>
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

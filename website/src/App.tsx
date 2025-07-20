import {print, FontStyle} from 'persian-figlet';
import {useState, useEffect, useCallback} from 'react';

import logo from './assets/logo.png';
import {Icons} from './components/Icon';
import {Toast} from './components/Toast';

type Theme = 'light' | 'dark';

interface AppState {
	text: string;
	font: FontStyle;
	theme: Theme;
	textColor: string;
	fontSize: number;
	output: string;
	showToast: boolean;
	toastMessage: string;
}

function App() {
	const [state, setState] = useState<AppState>({
		text: 'سلام دنیا',
		font: FontStyle.STANDARD,
		theme: 'light',
		textColor: '#AB0B37',
		fontSize: 12,
		output: '',
		showToast: false,
		toastMessage: '',
	});

	// Generate output whenever text or font changes
	useEffect(() => {
		if (state.text.trim()) {
			const result = print(state.text, {
				font: state.font,
				silent: true,
			});
			setState((prev) => ({...prev, output: result}));
		} else {
			setState((prev) => ({...prev, output: ''}));
		}
	}, [state.text, state.font]);

	// Theme management
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', state.theme);
		localStorage.setItem('persian-figlet-theme', state.theme);
	}, [state.theme]);

	// Load saved theme on mount
	useEffect(() => {
		const savedTheme = localStorage.getItem('persian-figlet-theme') as Theme;
		if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
			setState((prev) => ({...prev, theme: savedTheme}));
		}
	}, []);

	const showToast = useCallback((message: string) => {
		setState((prev) => ({...prev, showToast: true, toastMessage: message}));
		setTimeout(() => {
			setState((prev) => ({...prev, showToast: false}));
		}, 3000);
	}, []);

	const handleCopy = useCallback(async () => {
		if (!state.output) {
			showToast('هیچ متنی برای کپی وجود ندارد');
			return;
		}

		try {
			await navigator.clipboard.writeText(state.output);
		} catch {
			// Fallback for older browsers
			const textArea = document.createElement('textarea');
			textArea.value = state.output;
			document.body.appendChild(textArea);
			textArea.select();
			document.execCommand('copy');
			document.body.removeChild(textArea);
		}

		showToast('متن با موفقیت کپی شد');
	}, [state.output, showToast]);

	const handlePrint = useCallback(() => {
		if (!state.output) {
			showToast('هیچ متنی برای چاپ وجود ندارد');
			return;
		}
		window.print();
	}, [state.output, showToast]);

	const toggleTheme = useCallback(() => {
		setState((prev) => ({
			...prev,
			theme: prev.theme === 'light' ? 'dark' : 'light',
		}));
	}, []);

	const zoomIn = useCallback(() => {
		setState((prev) => ({
			...prev,
			fontSize: Math.min(prev.fontSize + 2, 24), // Max 24px
		}));
	}, []);

	const zoomOut = useCallback(() => {
		setState((prev) => ({
			...prev,
			fontSize: Math.max(prev.fontSize - 2, 8), // Min 8px
		}));
	}, []);

	const resetZoom = useCallback(() => {
		setState((prev) => ({
			...prev,
			fontSize: 12, // Reset to default
		}));
	}, []);

	return (
		<div className='app'>
			<header className='header'>
				<div className='container'>
					<div className='header-content'>
						<a href='#' className='logo'>
							<img className='logo-icon' src={logo} />
							<span className='typo'>فیگلت فارسی</span>
						</a>

						<div className='header-actions'>
							<button
								className='theme-toggle'
								onClick={toggleTheme}
								aria-label={`تغییر به تم ${state.theme === 'light' ? 'تاریک' : 'روشن'}`}
							>
								{state.theme === 'light' ? <Icons.Moon /> : <Icons.Sun />}
							</button>

							<div className='external-links'>
								<a
									href='https://github.com/moh3n9595/persian-figlet'
									className='external-link'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icons.GitHub />
								</a>
								<a
									href='https://www.npmjs.com/package/persian-figlet'
									className='external-link'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Icons.Package />
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main className='main'>
				<div className='container'>
					<section className='controls'>
						<div className='control-group'>
							<div className='control-item'>
								<label htmlFor='text-input' className='control-label'>
									متن فارسی
								</label>
								<textarea
									id='text-input'
									className='input textarea'
									value={state.text}
									onChange={(e) =>
										setState((prev) => ({...prev, text: e.target.value}))
									}
									placeholder='متن فارسی خود را اینجا وارد کنید...'
									dir='rtl'
								/>
							</div>

							<div className='control-item'>
								<label htmlFor='font-select' className='control-label'>
									نوع فونت
								</label>
								<select
									id='font-select'
									className='select'
									value={state.font}
									onChange={(e) =>
										setState((prev) => ({
											...prev,
											font: e.target.value as FontStyle,
										}))
									}
								>
									<option value='STANDARD'>استاندارد</option>
								</select>
							</div>

							<div className='control-item'>
								<label htmlFor='color-input' className='control-label'>
									رنگ متن
								</label>
								<input
									id='color-input'
									type='color'
									className='color-input'
									value={state.textColor}
									onChange={(e) =>
										setState((prev) => ({...prev, textColor: e.target.value}))
									}
								/>
							</div>

							<div className='control-item'>
								<label className='control-label'>
									اندازه فونت ({state.fontSize}px)
								</label>
								<div className='zoom-controls'>
									<button
										className='btn btn-secondary zoom-btn'
										onClick={zoomOut}
										disabled={state.fontSize <= 8}
									>
										<Icons.ZoomOut />
									</button>
									<button
										className='btn btn-secondary zoom-btn'
										onClick={resetZoom}
									>
										<Icons.Reset />
									</button>
									<button
										className='btn btn-secondary zoom-btn'
										onClick={zoomIn}
										disabled={state.fontSize >= 24}
									>
										<Icons.ZoomIn />
									</button>
								</div>
							</div>
						</div>

						<div className='action-buttons'>
							<button className='btn btn-primary' onClick={handleCopy}>
								<Icons.Copy />
								کپی
							</button>
							<button className='btn btn-secondary' onClick={handlePrint}>
								<Icons.Print />
								چاپ
							</button>
						</div>
					</section>

					<section className='output-section'>
						<div className='output-header'>
							<h2 className='output-title'>خروجی ASCII Art</h2>
						</div>

						<div className='output-container'>
							{state.output ? (
								<pre
									className='output-content'
									style={{
										color: state.textColor,
										fontSize: `${state.fontSize}px`,
									}}
								>
									{state.output}
								</pre>
							) : (
								<div className='output-placeholder'>
									متن فارسی خود را وارد کنید تا ASCII Art آن نمایش داده شود
								</div>
							)}
						</div>
					</section>
				</div>
			</main>

			<footer className='footer'>
				<div className='container'>
					<div className='footer-content'>
						<p>ساخته شده با ❤️ برای جامعه فارسی‌زبان</p>
					</div>
				</div>
			</footer>

			<Toast show={state.showToast} message={state.toastMessage} />
		</div>
	);
}

export default App;

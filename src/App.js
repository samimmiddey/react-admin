// import React, { Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';
import Sales from './pages/Sales';
import Analytics from './pages/Analytics';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import NewUser from './pages/NewUser';
import NewProduct from './pages/NewProduct';
// import Progress from './components/UI/Progress';

// const Users = React.lazy(() => import('./pages/Users'));
// const SingleUser = React.lazy(() => import('./pages/SingleUser'));
// const Sales = React.lazy(() => import('./pages/Sales'));
// const Analytics = React.lazy(() => import('./pages/Analytics'));
// const Products = React.lazy(() => import('./pages/Products'));
// const SingleProduct = React.lazy(() => import('./pages/SingleProduct'));
// const NewUser = React.lazy(() => import('./pages/NewUser'));
// const NewProduct = React.lazy(() => import('./pages/NewProduct'));

function App() {
	const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
	const darkMode = useSelector(state => state.ui.darkMode);
	const getMode = darkMode ? 'dark' : 'light';
	if (darkMode) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}

	const getDesignTokens = (mode) => ({
		palette: {
			mode,
			...(mode === 'dark',
			{
				background: {
					paper: '#1f292e'
				},
			})
		},
	});

	// Dark Theme
	const darkTheme = createTheme(
		getDesignTokens(getMode),
		{
			typography: {
				fontFamily: [
					'Poppins',
					'sans-serif'
				].join(','),
			},
			components: {
				MuiCard: {
					styleOverrides: {
						root: {
							border: '1px solid #455a64',
							borderRadius: '10px',
						}
					}
				},
				MuiTableContainer: {
					styleOverrides: {
						root: {
							border: '1px solid #455a64',
							borderRadius: '10px'
						}
					}
				},
				Table: {
					styleOverrides: {
						root: {
							border: '1px solid #455a64',
							borderRadius: '10px'
						}
					}
				},
			}
		});

	// Light Theme
	const lightTheme = createTheme(
		{
			typography: {
				fontFamily: [
					'Poppins',
					'sans-serif'
				].join(','),
			},
			components: {
				MuiCard: {
					styleOverrides: {
						root: {
							border: '1px solid #eceff1',
							borderRadius: '10px'
						}
					}
				},
				MuiTableContainer: {
					styleOverrides: {
						root: {
							border: '1px solid #eceff1',
							borderRadius: '10px'
						}
					}
				}
			}
		});

	return (
		<ThemeProvider theme={getMode === 'dark' ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Switch>
					{
						!isLoggedIn &&
						<Route path='/' exact>
							<Auth />
						</Route>
					}
					{
						!isLoggedIn &&
						<Route path='*'>
							<Redirect to='/' />
						</Route>
					}
				</Switch>
				{
					isLoggedIn &&
					<Navigation>
						{/* <Suspense fallback={<Progress />}> */}
						<Switch>
							<Route path='/' exact>
								<Home />
							</Route>
							<Route path='/users' exact>
								<Users />
							</Route>
							<Route path='/users/newuser'>
								<NewUser />
							</Route>
							<Route path='/users/:userID'>
								<SingleUser />
							</Route>
							<Route path='/sales'>
								<Sales />
							</Route>
							<Route path='/analytics'>
								<Analytics />
							</Route>
							<Route path='/products' exact>
								<Products />
							</Route>
							<Route path='/products/newproduct' exact>
								<NewProduct />
							</Route>
							<Route path='/products/:productID'>
								<SingleProduct />
							</Route>
							<Route path='*'>
								<Redirect to='/' />
							</Route>
						</Switch>
						{/* </Suspense> */}
					</Navigation>
				}
			</BrowserRouter>
		</ThemeProvider >
	);
}

export default App;

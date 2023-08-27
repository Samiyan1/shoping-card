
import Navbar from '../../components/navbar/Navbar'
import Navigation from '../../components/navigator/Navigation'
import './homePage.scss'
function HomePage() {


  // useEffect(() => {

  //     // getData()
  //   return () => {

  //   }
  // }, [])


  // const getData : void = () => {
  //     productsService.getAll()
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  return (
   <>
    <Navbar/>
    <Navigation/>
    </>
  )
}

export default HomePage
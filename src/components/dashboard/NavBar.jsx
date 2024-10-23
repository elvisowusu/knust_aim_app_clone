import campus from '../../assets/campus.jpg'

export const NavBar = () => {

    return <div className="fixed w-full z-10 px-6 h-[4.4rem] bg-black overflow-hidden">
        <img className='absolute -z-10 right-0 w-full left-0 top-0 opacity-45' src={campus} alt="" />
        
  </div>;
};

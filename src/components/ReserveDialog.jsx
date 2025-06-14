const ReserveDialog = ({ handleClose }) => {
    return (
        <div className="fixed z-50 top-0 w-screen h-screen bg-charcoal/50" onClick={handleClose}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-beige text-charcaol text-center gap-y-3 rounded-2xl px-10 md:px-20 py-10 border border-rose" onClick={(e) => e.stopPropagation()}>
                <h1 className="font-great-vibes text-3xl md:text-4xl text-rose">Make a Reservation</h1>
                <h2 className="md:text-xl mb-2">Please contact us to place a reservation</h2>


                <a href="tel:+33123456789" className="text-xl md:text-2xl">+33 1 23 45 67 89</a>
                <a href="mailto:lumierebistro@email.com" className="text-xl md:text-2xl">lumierebistro@email.com</a>
            </div>
        </div>
    );
};

export default ReserveDialog;
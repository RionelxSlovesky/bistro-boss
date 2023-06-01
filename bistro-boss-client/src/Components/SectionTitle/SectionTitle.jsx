

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mb-8 text-center">
            <p className="text-xl text-yellow-600">---{subHeading}---</p>
            <hr className="w-1/2 mx-auto my-2"/>
            <h3 className="text-4xl uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
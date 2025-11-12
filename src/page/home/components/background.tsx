import Image from "next/image";



export const Background = () => {
    return (
        <div className="fixed inset-0  " >
            <Image
                src="/images/branch.png"
                alt="branch"
                width={800}
                height={800}
                className="absolute top-3/5 left-0 w-[30vw] aspect-[16_10] object-cover"
            />
            <Image
                src="/images/leaves.png"
                alt="branch"
                width={800}
                height={800}
                className="absolute top-2/5 right-0 w-[30vw] aspect-[16_10] object-cover"
            />
        </div>
    );
};

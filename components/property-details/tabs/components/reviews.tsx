import React from "react";

interface Review {
    id: string;
    date?: string; // e.g. 'Feb 2024' or undefined
    title: string;
    content: string;
    rating: number; // 1-5
}

const reviews: Review[] = [
    {
        id: "1",
        title: "Great hotel!",
        content:
            "Beautiful hotel. Rooms have a very southwest feel and all modern amenities. Hotel bar was great. The bar staff (Jess Justin & Rob) were awesome. Emir the shuttle driver was very nice. The pool is nice (small but there wasn't really anyone out when I went). I had a chicken quesadilla from the hotel bar/restaurant for lunch which was ok. The hotel airport shuttle was very convenient.",
        rating: 1,
    },
    {
        id: "2",
        date: "Feb 2024",
        title: "Great stay!",
        content:
            "We had a wonderful experience at the Estancia and especially the Paseo bar. Justin and Claudia were amazing and so welcoming! We loved visiting and enjoying the atmosphere and delicious cocktails! Thank you Claudia and Justin for such a great Saturday night! We hope to see you both soon.",
        rating: 3,
    },
    {
        id: "3",
        date: "Feb 2024",
        title: "Great spot for locals",
        content:
            "Daniella took great care of us. This is a great spot for locals. The happy hour specials were great and the service was top notch. We enjoyed the loaded fries sliders and the chips and Queso. Drinks were pretty and delicious. The hotel itself smells great.",
        rating: 2,
    },
    {
        id: "4",
        date: "Feb 2024",
        title: "Coaching search",
        content:
            "Top tier service and the staff has great energy. I just in town to catch up with a friend and they made things. Claudia is great as well she was very attentive and she made us feel welcomed and secure. We were looking at houses most of the day and she helped with our search.",
        rating: 4,
    },
];

export const Reviews = () => {
    return (
        <div className="flex flex-col gap-6 p-4">
            <h2 className="text-2xl font-bold">Total reviews: {reviews.length}</h2>
            {reviews.map((review) => (
                <div
                    key={review.id}
                    className="border max-w-5xl border-gray-300 rounded bg-white p-4 flex flex-col gap-2 relative"
                >
                    {/* Stars top right */}
                    <div className="absolute top-4 right-4">
                        <Stars rating={review.rating} />
                    </div>
                    {/* Date */}
                    <div className="font-semibold text-sm">
                        {review.date || "No date found."}
                    </div>
                    {/* Title */}
                    <div className="font-bold text-lg mt-1">{review.title}</div>
                    {/* Content */}
                    <div className="text-base text-gray-800 mt-1 whitespace-pre-line">
                        {review.content}
                    </div>
                </div>
            ))}
        </div>
    );
};

function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
                <svg
                    key={i}
                    className={`w-6 h-6 ${i <= rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <polygon
                        strokeWidth="1"
                        strokeLinejoin="round"
                        points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27"
                    />
                </svg>
            ))}
        </div>
    );
}
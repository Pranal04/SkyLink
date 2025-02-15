import { useState } from "react";
import { Link } from "react-router-dom";
import { auth, db, googleProvider } from "/firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // Handle Email/Password Signup
    const handleSignup = async (e) => {
        e.preventDefault();
        setMessage(""); 
    
        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(password)
            const user = userCredential.user;
    
            // Store user details in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                createdAt: new Date(),
            });
    
            setMessage("Signup successful!");
        } catch (error) {
            setMessage(error.message);
            console.error("Firestore Error:", error);
        }
    };

    // Handle Google Signup
    const handleGoogleSignup = async () => {
        setLoading(true);
        setMessage("");

        try {
            const userCredential = await signInWithPopup(auth, googleProvider);
            await setDoc(doc(db, "users", userCredential.user.uid), {
                name: userCredential.user.displayName,
                email: userCredential.user.email,
            });

            setMessage("Google Signup successful!");
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">Sign Up</h2>

                {message && (
                    <p className={`text-center mb-4 ${message.includes("failed") ? "text-red-600" : "text-green-600"}`}>
                        {message}
                    </p>
                )}

                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    
                    <button 
                        type="submit" 
                        className={`w-full text-white py-2 rounded-lg font-semibold transition ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>

                    <button
                        type="button"
                        className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition"
                        onClick={handleGoogleSignup}
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Sign Up with Google"}
                    </button>

                    <p className="text-center mt-4">Already have an account?</p>
                    <Link
                        to="/login"
                        className="block w-full text-center border border-blue-600 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition"
                    >
                        Login
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;

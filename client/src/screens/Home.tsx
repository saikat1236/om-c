import { useCallback } from "react";
import { Button } from "../components/ui/button";
import { useSocket } from "../context/SocketProvider";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const { socket } = useSocket(); // No need for setSocket
  const navigate = useNavigate();

  const handleStartCall = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!socket) {
        console.error("Socket not initialized! Make sure SocketProvider is wrapping the app.");
        return;
      }
      navigate("/chat");
    },
    [socket, navigate]
  );

  return (
    <>
      <Helmet>
        <title>Allocam - Connect, Chat, Collaborate</title>
        <meta
          name="description"
          content="Allocam is an innovative video chat application designed to connect users from all around the world for spontaneous and engaging conversations. Built with a focus on ease of use and seamless interaction, Allocam allows users to effortlessly start video calls, share screens, and exchange messages in real-time. Whether you're seeking to meet new people, collaborate on projects, or simply enjoy face-to-face interactions, Allocam delivers a smooth experience with user-friendly features. It prioritizes privacy, utilizing encrypted connections to ensure that all communications are secure. The platform's sleek and modern design, combined with features like quick user pairing, screen sharing, and integrated messaging, makes Allocam a go-to choice for both casual and professional video chatting."
        />
        <meta
          name="keywords"
          content="omegle, Random Video chat, Random call, Video call, omegle clone, omegle type apps, Allocam, Allocam.com, meet, random chat, messages, video chat, screen sharing, real-time messaging, secure video calls"
        />
      </Helmet>
      <main className="flex flex-col justify-center h-full mx-auto w-full p-4 lg:p-8">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-evenly mx-auto">
          {/* Logo Section */}
          <div className="flex flex-col items-center justify-center text-center mb-6 lg:mb-0 w-full lg:w-auto">
            <div className="flex items-end gap-4 mb-6">
              <img src={logo} alt="Allocam Logo" className="w-24 h-24" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-2 text-yellow-500 ">
              Allocam
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 ">
              Connect. Chat. Collaborate.
            </p>
          </div>

          {/* Description & Call-to-Action Section */}
          <div className="bg-background shadow-xl rounded-3xl p-6 md:p-8 w-full lg:w-[60%] mx-0 backdrop-blur-lg bg-opacity-60 border border-teal-300">
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 leading-relaxed ">
              Allocam is an innovative video chat application designed to
              connect users from all around the world for spontaneous and
              engaging conversations. Built with a focus on ease of use and
              seamless interaction, Allocam allows users to effortlessly start
              video calls, share screens, and exchange messages in real-time.
              Whether you're seeking to meet new people, collaborate on
              projects, or simply enjoy face-to-face interactions, Allocam
              delivers a smooth experience with user-friendly features. It
              prioritizes privacy, utilizing encrypted connections to ensure
              that all communications are secure. The platform's sleek and
              modern design, combined with features like quick user pairing,
              screen sharing, and integrated messaging, makes Allocam a go-to
              choice for both casual and professional video chatting.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 md:mb-8">
              <Button
                className="w-full sm:w-auto py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wider shadow-lg transition-transform duration-300 hover:scale-105 bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800 rounded-xl"
                onClick={handleStartCall}
              >
                Start Your Journey
              </Button>
              <a
                href="https://github.com/codernotme/allocam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="w-full py-3 sm:py-4 text-base sm:text-lg font-semibold tracking-wider shadow-lg transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2 border-gray-600 rounded-xl"
                >
                  <Github size={24} />
                  Contribute on GitHub
                </Button>
              </a>
            </div>

            <div className="text-xs sm:text-sm text-center mt-4 ">
              By using Allocam, you agree to our Terms of Service and Privacy
              Policy.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

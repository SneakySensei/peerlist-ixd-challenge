"use client";
import peerlistLogo from "@/assets/Peerlist Logo.png";
import googleLogo from "@/assets/Google icon.png";
import appleLogo from "@/assets/Apple icon.png";
import Image from "next/image";
import { ArrowRight, CaretDown, X } from "@phosphor-icons/react/dist/ssr";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import clsx from "clsx";

export default function PageSwitch() {
  const [formMode, setFormMode] = useState<"join" | "login">();

  return (
    <div className="bg-gray-300">
      <main className="min-h-screen bg-white w-full flex flex-col max-w-[420px] mx-auto">
        <section className="h-11 bg-gray-600" />
        <section className="px-6 flex-1 min-h-0 py-10 flex flex-col justify-end">
          <header className="space-y-6">
            <div className="flex">
              <Image
                src={peerlistLogo}
                alt="Peerlist logo"
                className="size-10"
              />
            </div>
            <AnimatePresence>
              {!formMode && (
                <motion.h1
                  className="text-[32px] text-balance"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  A place on the internet <br />
                  for <em>designers & developers</em> <br />
                  to launch projects, build a portfolio, and find jobs.
                </motion.h1>
              )}
            </AnimatePresence>
          </header>
          <section className="mt-auto">
            <JoinPeerlistForm formMode={formMode} setFormMode={setFormMode} />
            <LoginForm formMode={formMode} setFormMode={setFormMode} />
          </section>

          <footer className="mt-10 text-[11px] text-center text-[#959DA5]">
            © 2024 Peerlist Inc. • iOS v1.4.2
          </footer>
        </section>
      </main>
    </div>
  );
}

type JoinPeerlistFormProps = {
  formMode: "join" | "login" | undefined;
  setFormMode: Dispatch<SetStateAction<"join" | "login" | undefined>>;
};
function JoinPeerlistForm({ formMode, setFormMode }: JoinPeerlistFormProps) {
  return (
    <motion.article
      animate={{
        scale: formMode === "login" ? 0.9 : 1,
        zIndex: formMode === "join" ? 10 : "auto",
      }}
      className={clsx(
        "border border-[#E1E4E8] relative rounded-2xl bg-white bg-gradient-peerlist"
      )}
    >
      <motion.button
        initial={{ paddingTop: 16, paddingBottom: 16 }}
        animate={{
          paddingTop: formMode === "join" ? 24 : 16,
          paddingBottom: formMode === "join" ? 24 : 16,
        }}
        className="w-full text-left px-4 flex items-center justify-between"
        disabled={formMode === "login"}
        onClick={() => setFormMode(formMode === "join" ? undefined : "join")}
      >
        <div className="space-y-1">
          <div className="font-semibold text-[17px]">Join Peerlist</div>
          <div className="text-[13px]">Create your Peerlist profile.</div>
        </div>
        {formMode === "join" ? (
          <X size={24} className="text-[#0D0D0D]/50" />
        ) : (
          <div className="size-10 rounded-full grid place-items-center bg-gradient-peerlist-button border-2 border-[#219653]">
            <CaretDown className="text-white" size={24} />
          </div>
        )}
      </motion.button>
      <AnimatePresence>
        {formMode === "join" && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 90,
                mass: 0.5,
              },
            }}
            exit={{ height: 0, opacity: 0 }}
            action=""
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 space-y-6">
              <section className="space-y-4">
                <label className="space-y-2 block">
                  <header className="text-[13px] flex justify-between align-baseline">
                    <div className="font-semibold">Email</div>
                  </header>
                  <input
                    type="text"
                    className="h-11 w-full rounded-lg border border-[#E1E4E8]"
                  />
                </label>
                <label className="space-y-2 block">
                  <header className="text-[13px] flex justify-between align-baseline">
                    <div className="font-semibold">Password</div>
                    <div className="text-[11px] text-[#6A737D]">
                      Min 8 characters
                    </div>
                  </header>
                  <input
                    type="password"
                    className="h-11 w-full rounded-lg border border-[#E1E4E8]"
                  />
                </label>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="px-6 py-2 flex gap-x-1 items-center rounded-full bg-gradient-peerlist-button border-2 [text-shadow:1px_1px_rgba(0,0,0,0.25)] text-white border-[#219653] text-[17px] font-bold"
                  >
                    Join Peerlist <ArrowRight weight="bold" size={22} />
                  </button>
                </div>
              </section>
              <div className="flex items-center gap-x-2 text-[11px] text-[#959DA5] font-semibold">
                <hr className="flex-1 min-w-0" />
                <span>OR</span>
                <hr className="flex-1 min-w-0" />
              </div>
              <section className="space-y-4">
                <button
                  type="button"
                  className="py-[9px] w-full text-center text-[17px] font-semibold rounded-full justify-center flex items-center gap-x-2 bg-white border border-[#E1E4E8]"
                >
                  <Image
                    src={googleLogo}
                    className="size-[22px]"
                    alt="Google logo"
                  />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="py-[9px] w-full text-center text-[17px] font-semibold rounded-full justify-center flex items-center gap-x-2 bg-white border border-[#E1E4E8]"
                >
                  <Image
                    src={appleLogo}
                    className="size-[22px]"
                    alt="Apple logo"
                  />
                  Continue with Apple
                </button>
              </section>
              <footer className="text-center text-[11px] text-[#6A737D]">
                By tapping Continue, you agree to our <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </footer>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

type LoginFormProps = {
  formMode: "join" | "login" | undefined;
  setFormMode: Dispatch<SetStateAction<"join" | "login" | undefined>>;
};
function LoginForm({ formMode, setFormMode }: LoginFormProps) {
  return (
    <motion.article
      initial={{ marginTop: 16 }}
      animate={{
        scale: formMode === "join" ? 0.9 : 1,
        marginTop: formMode ? -52 : 16,
        zIndex: formMode === "login" ? 10 : "auto",
      }}
      className={clsx(
        "border border-[#E1E4E8] relative rounded-2xl bg-white bg-gradient-peerlist-muted"
      )}
    >
      <motion.button
        initial={{ paddingTop: 16, paddingBottom: 16 }}
        animate={{
          paddingTop: formMode === "login" ? 24 : 16,
          paddingBottom: formMode === "login" ? 24 : 16,
        }}
        className="w-full text-left p-4 flex items-center justify-between"
        disabled={formMode === "join"}
        onClick={() => setFormMode(formMode === "login" ? undefined : "login")}
      >
        <div className="space-y-1">
          <div className="font-semibold text-[17px]">Login</div>
          <div className="text-[13px]">Already have a Peerlist profile?</div>
        </div>
        {formMode === "login" ? (
          <X size={24} className="text-[#0D0D0D]/50" />
        ) : (
          <div className="size-10 rounded-full grid place-items-center bg-gradient-peerlist-button border-2 border-[#219653]">
            <CaretDown className="text-white" size={24} />
          </div>
        )}
      </motion.button>
      <AnimatePresence>
        {formMode === "login" && (
          <motion.form
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 90,
                mass: 0.5,
              },
            }}
            exit={{ height: 0, opacity: 0 }}
            action=""
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 space-y-6">
              <section className="space-y-4">
                <label className="space-y-2 block">
                  <header className="text-[13px] flex justify-between align-baseline">
                    <div className="font-semibold">Email</div>
                  </header>
                  <input
                    type="text"
                    className="h-11 w-full rounded-lg border border-[#E1E4E8]"
                  />
                </label>
                <label className="space-y-2 block">
                  <header className="text-[13px] flex justify-between align-baseline">
                    <div className="font-semibold">Password</div>
                    <div className="text-[11px] text-[#6A737D]">
                      Min 8 characters
                    </div>
                  </header>
                  <input
                    type="password"
                    className="h-11 w-full rounded-lg border border-[#E1E4E8]"
                  />
                </label>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="text-[#0D0D0D] text-[15px] font-semibold"
                  >
                    Forgot password?
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 flex gap-x-1 items-center rounded-full bg-gradient-peerlist-button border-2 [text-shadow:1px_1px_rgba(0,0,0,0.25)] text-white border-[#219653] text-[17px] font-bold"
                  >
                    Login <ArrowRight weight="bold" size={22} />
                  </button>
                </div>
              </section>
              <div className="flex items-center gap-x-2 text-[11px] text-[#959DA5] font-semibold">
                <hr className="flex-1 min-w-0" />
                <span>OR</span>
                <hr className="flex-1 min-w-0" />
              </div>
              <section className="space-y-4">
                <button
                  type="button"
                  className="py-[9px] w-full text-center text-[17px] font-semibold rounded-full justify-center flex items-center gap-x-2 bg-white border border-[#E1E4E8]"
                >
                  <Image
                    src={googleLogo}
                    className="size-[22px]"
                    alt="Google logo"
                  />
                  Continue with Google
                </button>
                <button
                  type="button"
                  className="py-[9px] w-full text-center text-[17px] font-semibold rounded-full justify-center flex items-center gap-x-2 bg-white border border-[#E1E4E8]"
                >
                  <Image
                    src={appleLogo}
                    className="size-[22px]"
                    alt="Apple logo"
                  />
                  Continue with Apple
                </button>
              </section>
              <footer className="text-center text-[11px] text-[#6A737D]">
                By tapping Continue, you agree to our <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </footer>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

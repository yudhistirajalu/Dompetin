import LandingPage from "./landingpage";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Wfa() {
  return <LandingPage />;
}
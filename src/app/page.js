"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import Link from "next/link";

const kataKataMutiara = [
    {
        quote: "Jika Prasangkamu benar kepada Allah, engkau pasti mengetahui  bahwa pencegahan dari sesuatu yang kamu inginkan, sebenarnya adalah pemberian.",
        author: "",
        image: "/images/art-wisdom.jpg"
    },
    {
        quote: "Apabila kamu menginginkan ketenangan, jangan biarkan orang lain tahu banyak tentangmu.",
        author: "",
        image: "/images/tree-wisdom.jpg"
    },
    {
        quote: "Diterima oleh khalayak sebelum layak, adalah racun yang mematikan bagi seorang murid.",
        author: "",
        image: "/images/learning.jpg"
    },
    {
        quote: "Sumber dari segala rasa sakit adalah harapan yang berlebihan.",
        author: "",
        image: "/images/sky-dreams.jpg"
    }
];

const Page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 p-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-7xl mx-auto space-y-8"
            >
                <Card className="bg-white/80 backdrop-blur-lg border-amber-200 shadow-xl">
                    <CardHeader className="space-y-4">
                        <motion.div
                            animate={{ scale: [1, 1.02, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <CardTitle className="text-4xl font-bold text-center text-amber-800">
                                <Sparkles className="inline-block mr-2 text-amber-500" />
                                Kata Mutiara Kebijaksanaan
                            </CardTitle>
                        </motion.div>
                        <p className="text-center text-amber-700">Kumpulan kata-kata bijak yang mencerahkan jiwa</p>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {kataKataMutiara.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="bg-white/90 border-amber-200 overflow-hidden h-full">
                                <div className="relative h-48 w-full">
                                    <Image
                                        src={item.image}
                                        alt={item.quote}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-amber-800 font-serif">
                                        "{item.quote}"
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-amber-700 italic">- {item.author}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Card className="bg-white/80 backdrop-blur-lg border-amber-200">
                        <CardContent className="p-6">
                            <div className="flex justify-center">
                                <Button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 rounded-full text-lg shadow-lg" asChild>
                                    <Link href="/quotes">
                                    <Sparkles className="mr-2" />
                                    Temukan Lebih Banyak Kebijaksanaan
                                    </Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Page;

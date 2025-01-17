import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const QuoteCard = ({ quote }) => {
  return (
    <Card className="border-amber-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 p-6">
        <h2 className="text-xl font-serif text-amber-800">{quote?.author ?? "-"}</h2>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700 leading-relaxed">"{quote?.content}"</p>
      </CardContent>
      <CardFooter className="bg-amber-50/50 p-4 flex justify-between items-center">
        <Badge variant="outline" className="bg-white/80 text-amber-700 border-amber-200 px-4 py-1">
          {quote?.category.name}
        </Badge>
      </CardFooter>
    </Card>
  );
};

export default QuoteCard;

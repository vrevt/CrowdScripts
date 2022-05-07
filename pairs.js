#crowdscript #pairs
struct pairs{
    amount:int,
    ind:int,
    function less(self:pairs, other:pairs) -> bool{
        return (self.amount < other.amount);
    }
}

s:pairs[] = []

s.sort();

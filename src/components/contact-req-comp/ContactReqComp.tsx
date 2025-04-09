import React from 'react';
import { contactRequestArr } from '@/data/contactreq';
import { Card, CardContent } from '../ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import { Button } from '../ui/button';

function ContactReqComp() {
  return (
    <Card className="mt-5">
      <CardContent className="overflow-x-auto p-2 sm:p-4">
        <div className="min-w-[600px] lg:min-w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px] text-sm sm:text-base">
                  Name
                </TableHead>
                <TableHead className="text-sm sm:text-base">Email</TableHead>
                <TableHead className="text-sm sm:text-base">Message</TableHead>
                <TableHead className="text-sm sm:text-base">
                  Phone Number
                </TableHead>
                <TableHead className="text-sm sm:text-base">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactRequestArr.map((item) => (
                <React.Fragment key={item.id}>
                  <TableRow>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.message}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => alert('delete action')}
                        variant="destructive"
                      >
                        Done Connect
                      </Button>
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default ContactReqComp;

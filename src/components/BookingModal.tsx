import React from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 relative">
        <div className="w-full h-full relative">
          <iframe
            src="https://koalendar.com/e/meet-with-a-design-expert"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Schedule a consultation"
          />
          <div style={{position: 'absolute', left: 0, right: 0, bottom: 0, height: '48px', background: 'white', zIndex: 10, pointerEvents: 'none'}} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal; 
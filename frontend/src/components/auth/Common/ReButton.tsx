// components/common/ReButton.tsx
import { Button, CircularProgress, type ButtonProps } from "@mui/material";

interface ReButtonProps extends ButtonProps {
  loading?: boolean;   // show spinner
  label?: string;      // optional label
}

const ReButton = ({ 
  loading = false, 
  label, 
  children, 
  disabled, 
  ...props 
}: ReButtonProps) => {
  return (
    <Button 
      disabled={loading || disabled} 
      {...props}
    >
      {loading ? (
        <>
          <CircularProgress size={20} color="inherit" />
        </>
      ) : (
        label || children
      )}
    </Button>
  );
};

export default ReButton;

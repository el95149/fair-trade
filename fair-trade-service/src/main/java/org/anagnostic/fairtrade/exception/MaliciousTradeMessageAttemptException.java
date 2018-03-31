package org.anagnostic.fairtrade.exception;

public class MaliciousTradeMessageAttemptException extends RuntimeException{

    public MaliciousTradeMessageAttemptException() {
        super();
    }

    public MaliciousTradeMessageAttemptException(String message) {
        super(message);
    }

    public MaliciousTradeMessageAttemptException(String message, Throwable cause) {
        super(message, cause);
    }

    public MaliciousTradeMessageAttemptException(Throwable cause) {
        super(cause);
    }

    protected MaliciousTradeMessageAttemptException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}

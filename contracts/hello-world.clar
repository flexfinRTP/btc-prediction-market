(define-public (say-hi)
    (ok "hello world"))

(define-read-only (echo-number (val int))
    (ok val))

;;(element-at (list 4 8 15 16 23 42) u3) ;;index of
;; tuple
;; {
    ;; id: u5, ;; a uint
    ;; username: "ClarityIsAwesome", ;; an ASCI string
    ;; address: 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE ;; and a principal
;;}
;; (get username { id: 5, username: "ClarityIsAwesome" })